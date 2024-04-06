'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from 'react';
import Lock from '@/app/_abi/Lock.json'
import { useAccount, useReadContracts, useWriteContract,useBalance ,usePrepareTransactionRequest } from 'wagmi'
import { useBankStore } from '@/app/_store/index'
import { useShallow } from 'zustand/react/shallow'
import { CopyIcon, Loader, Send } from 'lucide-react'
import { formatNumber } from "@/app/_util/helper";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { env } from "process";
export default function Deposit() {
  const [depositDialogOpen,setDepositDialogOpen]=useState(false)
  const [withdrawDialogOpen,setWithdrawDialogOpen]=useState(false)
  const { writeContract } = useWriteContract()
  const account = useAccount()
  const balance = useBalance({
    address: account.address,
  })
  
  // const [deposit, updateDeposit] = useBankStore(
  //   useShallow((state) => [state.deposit, state.updateDeposit]),
  // )
  const data = useReadContracts({
    contracts: [
      {
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS||'',
        abi: Lock.abi,
        functionName: 'unlockTime',
        
      },
      {
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        abi: Lock.abi,
        functionName: 'getDeposit',
      },
      {
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        abi: Lock.abi,
        functionName: 'owner',
      }
    ],
    query:{
      staleTime:Infinity,
      enabled:!!account.address
    }
  })
  console.log(data)
  const [unlockTime, deposit, owner] = data.data?.map(item => item.result as number) || [0,0,0]

  const formSchema = z.object({
    amount: z.coerce.number().max(Number(balance)).min(0),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
    },
  })
  function onSaveSubmit(values: z.infer<typeof formSchema>) {
    writeContract({
      abi: Lock.abi,
      address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      functionName: 'save',
      args: [
        BigInt(values.amount)
        // values.amount
      ],
      account:account.address
    },{
      onSuccess:data=>{
        setDepositDialogOpen(false)
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      },
      onError:err=>{
        toast(err.message)
      }
    })
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }

  function onWithdrawSubmit(values: z.infer<typeof formSchema>) {
    writeContract({
      abi: Lock.abi,
      address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      functionName: 'widthdraw',
      args: [
        BigInt(values.amount)
        // values.amount
      ],
      // account:account.address
    },{
      onSuccess:data=>{
        setDepositDialogOpen(false)
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      },
      onError:err=>{
        toast(err.message)
      }
    })
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }

  // useEffect(() => {

  //   const [unlockTime, balance, owner] = data.data?.map(item => item.result as number) || []
  //   console.log(balance)
  //   updateDeposit(balance)
  // }, [])
  return <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
    <Card
      className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
    >
      <CardHeader className="pb-3">
        <CardTitle>Your Deposit</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          Introducing Our Dynamic Orders Dashboard for Seamless
          Management and Insightful Analysis.
        </CardDescription>
      </CardHeader>
      <CardFooter className="space-x-2">
        <Dialog open={depositDialogOpen} onOpenChange={value=>{
          setDepositDialogOpen(value)
        }}>
          <DialogTrigger asChild>
            <Button>Save Money</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Save Money</DialogTitle>
              <DialogDescription>
                Type the amount you want to save.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSaveSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <div className="flex items-center space-x-2">
                          <Input
                            type="number" placeholder="shadcn" {...field} />
                          <Button type="submit" size="sm" className="px-3">
                            <span className="sr-only">Send</span>
                            <Send className="h-4 w-4" />
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog open={withdrawDialogOpen} onOpenChange={value=>{
          setWithdrawDialogOpen(value)
        }}>
          <DialogTrigger asChild>
            <Button>Withdraw Money</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Withdraw Money</DialogTitle>
              <DialogDescription>
                Type the amount you want to withdraw.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onWithdrawSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <div className="flex items-center space-x-2">
                          <Input
                            type="number" placeholder="shadcn" {...field} />
                          <Button type="submit" size="sm" className="px-3">
                            <span className="sr-only">Withdraw</span>
                            <Send className="h-4 w-4" />
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

      </CardFooter>
    </Card>
    <Card x-chunk="dashboard-05-chunk-1">
      <CardHeader className="pb-2">
        <CardDescription>This Week</CardDescription>
        <CardTitle className="text-4xl truncate">{data.isLoading ? <Loader className="animate-spin" /> : formatNumber(Number(deposit))}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">
          +25% from last week
        </div>
      </CardContent>
      <CardFooter>
        <Progress value={25} aria-label="25% increase" />
      </CardFooter>
    </Card>
    <Card x-chunk="dashboard-05-chunk-2">
      <CardHeader className="pb-2">
        <CardDescription>This Month</CardDescription>
        <CardTitle className="text-4xl">$5,329</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">
          +10% from last month
        </div>
      </CardContent>
      <CardFooter>
        <Progress value={12} aria-label="12% increase" />
      </CardFooter>
    </Card>
  </div>



}