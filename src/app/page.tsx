"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import {
  Config,
  useBalance,
  useReadContract,
  useSimulateContract,
  useWriteContract,
} from "wagmi";
import {
  ELON_QUIT_SALE_ABI,
  ELON_QUIT_SALE_ADDRESS,
} from "@/contracts/elon-quit-sale";
import CountdownTimer from "@/components/countdown-timer";
import { useEffect, useState } from "react";
import { BaseError, formatEther, parseEther } from "viem";
import { WriteContractMutate } from "wagmi/query";
import { toast } from "sonner";

function Participant({
  participant,
  index,
}: {
  participant: `0x${string}`;
  index: number;
}) {
  const { data: contribution } = useReadContract({
    abi: ELON_QUIT_SALE_ABI,
    address: ELON_QUIT_SALE_ADDRESS,
    functionName: "contributions",
    args: [participant],
  });

  const formatAddress = participant.slice(0, 6) + "..." + participant.slice(-6);
  const formatContribution = contribution ? formatEther(contribution) : "0";

  return (
    <tr className="border-b border-white/10">
      <td className="py-3 pr-4">{index + 1}</td>
      <td className="py-3 px-4 font-mono">{formatAddress}</td>
      <td className="py-3 pl-4 text-right font-mono">{formatContribution}</td>
    </tr>
  );
}

function LaunchStatus() {
  const { data: allParticipants } = useReadContract({
    abi: ELON_QUIT_SALE_ABI,
    address: ELON_QUIT_SALE_ADDRESS,
    functionName: "getAllParticipants",
  });

  const { data: totalBnbRaised } = useReadContract({
    abi: ELON_QUIT_SALE_ABI,
    address: ELON_QUIT_SALE_ADDRESS,
    functionName: "totalWeiRaised",
  });

  const { data: hardcap } = useReadContract({
    abi: ELON_QUIT_SALE_ABI,
    address: ELON_QUIT_SALE_ADDRESS,
    functionName: "hardCap",
  });

  const formatTotalBnbRaised = totalBnbRaised
    ? formatEther(totalBnbRaised)
    : "0";

  const formatHardcap = hardcap ? formatEther(hardcap) : "0";

  const percent =
    totalBnbRaised && hardcap
      ? formatEther((totalBnbRaised / hardcap) * BigInt(100))
      : "0";

  return (
    <div className="bg-black/40 rounded-lg p-4 mb-6">
      <h2 className="text-xl text-white mb-4">Launch Status</h2>
      <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
        <div className="text-lg text-white">Total BNB Committed</div>
        <div className="flex gap-2 items-baseline">
          <span className="font-mono text-xl text-primary">
            {formatTotalBnbRaised}
          </span>
          <span className="text-white/60">/</span>
          <span className="font-mono text-white/60">{formatHardcap}</span>
          <span className="bg-green-500/20 text-green-500 font-mono text-sm px-2 py-0.5 rounded">
            {percent}%
          </span>
        </div>
      </div>
      <Progress value={100} className="h-2 mb-4" />

      <div className="flex justify-between mb-4">
        <div className="text-lg text-white">
          {allParticipants?.length} Participants
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead className="text-white/60 border-b border-white/20">
            <tr>
              <th className="text-left py-2 pr-4 font-normal">Rank</th>
              <th className="text-left py-2 px-4 font-normal">Address</th>
              <th className="text-right py-2 pl-4 font-normal">BNB Amounts</th>
            </tr>
          </thead>
          <tbody>
            {allParticipants?.map((participant, index) => (
              <Participant
                key={participant}
                participant={participant}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TokenInfo() {
  return (
    <div className="bg-black/40 rounded-lg p-4">
      <h2 className="text-xl text-white mb-4">Why This Token Is Awesome</h2>
      <p className="text-white/80 leading-relaxed">
        This isn't just another meme coin. $QUIT is a movement, a statement, and
        a middle finger to the establishment. When you hold $QUIT, you're not
        just investing in a token - you're joining a rebellion against
        everything wrong with crypto today
      </p>

      <div className="mt-4 flex gap-4">
        <Button
          variant="outline"
          className="border-white/20 text-white hover:bg-white/10"
          asChild
        >
          <Link href="https://x.com/elonquit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            Twitter
          </Link>
        </Button>
        <Button
          variant="outline"
          className="border-white/20 text-white hover:bg-white/10"
          asChild
        >
          <Link href="https://t.me/elonquitchannel">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Telegram
          </Link>
        </Button>
      </div>
    </div>
  );
}

function HowToParticipate() {
  return (
    <div className="mt-8">
      <h3 className="text-xl text-white mb-4">How to Participate</h3>

      <div className="mb-4">
        <div className="flex gap-2 mb-2">
          <div className="text-xl text-white font-bold">1.</div>
          <div className="text-xl text-white font-bold">Connect & Prepare</div>
        </div>
        <p className="text-white/70 text-sm pl-6">
          Connect your preferred wallet using the button above. Make sure you
          have enough BNB in your balance to participate in the launch.
          Double-check the minimum and maximum commitment limits.
        </p>
      </div>

      <div className="mb-4">
        <div className="flex gap-2 mb-2">
          <div className="text-xl text-white font-bold">2.</div>
          <div className="text-xl text-white font-bold">Commit BNB</div>
        </div>
        <p className="text-white/70 text-sm pl-6">
          Enter the amount of BNB you wish to commit. You'll receive an
          estimated allocation of $QUIT tokens in return. Confirm the
          transaction in your wallet.
        </p>
      </div>

      <div>
        <div className="flex gap-2 mb-2">
          <div className="text-xl text-white font-bold">3.</div>
          <div className="text-xl text-white font-bold">Claim Tokens</div>
        </div>
        <p className="text-white/70 text-sm pl-6">
          Once the launch sale period ends successfully, you can claim your
          acquired $QUIT tokens. If the launch does not succeed, your committed
          BNB will be automatically refunded to your wallet.
        </p>
      </div>
    </div>
  );
}

function CommitButton({
  buyAmount,
  saleStatus,
  isConnected,
}: {
  buyAmount: string;
  saleStatus: number | undefined;
  isConnected: boolean;
}) {
  const { data: buyTokens, error: buyTokensError } = useSimulateContract({
    abi: ELON_QUIT_SALE_ABI,
    address: ELON_QUIT_SALE_ADDRESS,
    functionName: "buyTokens",
    value: parseEther(buyAmount || "0"),
  });

  const { data: claimTokens, error: claimTokensError } = useSimulateContract({
    abi: ELON_QUIT_SALE_ABI,
    address: ELON_QUIT_SALE_ADDRESS,
    functionName: "claimTokens",
  });

  const { data: refundTokens, error: refundTokensError } = useSimulateContract({
    abi: ELON_QUIT_SALE_ABI,
    address: ELON_QUIT_SALE_ADDRESS,
    functionName: "refund",
  });

  const { writeContract, isPending } = useWriteContract();

  useEffect(() => {
    if (buyAmount && buyTokensError && saleStatus === 1) {
      toast.error("Buying QUIT tokens failed");
    }
  }, [buyAmount, buyTokensError, saleStatus]);

  useEffect(() => {
    if (claimTokensError && saleStatus === 2) {
      toast.error("Claiming QUIT tokens failed");
    }
  }, [claimTokensError, saleStatus]);

  useEffect(() => {
    if (refundTokensError && saleStatus === 3) {
      toast.error("Refund BNB failed");
    }
  }, [refundTokensError, saleStatus]);

  switch (saleStatus) {
    case 0:
      return (
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6"
          disabled
        >
          Purchase QUIT
        </Button>
      );
    case 1:
      return (
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6"
          disabled={!isConnected || isPending || !!buyTokensError || !buyTokens}
          onClick={() => {
            if (buyTokens?.request) {
              writeContract(buyTokens.request);
            }
          }}
        >
          Purchase QUIT
        </Button>
      );
    case 2:
      return (
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6"
          disabled={
            !isConnected || isPending || !!claimTokensError || !claimTokens
          }
          onClick={() => {
            if (claimTokens?.request) {
              writeContract(claimTokens.request);
            }
          }}
        >
          Claim QUIT
        </Button>
      );
    case 3:
      return (
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6"
          disabled={
            !isConnected || isPending || !!refundTokensError || !refundTokens
          }
          onClick={() => {
            if (refundTokens?.request) {
              writeContract(refundTokens.request);
            }
          }}
        >
          Refund BNB
        </Button>
      );
    default:
      return (
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6"
          disabled
        >
          Purchase QUIT
        </Button>
      );
  }
}

function CommitBNB() {
  const [buyAmount, setBuyAmount] = useState("");
  const { isConnected, address } = useAppKitAccount();

  const { data: bnbBalance } = useBalance({
    address: address as `0x${string}`,
  });

  const { data: saleStatus } = useReadContract({
    abi: ELON_QUIT_SALE_ABI,
    address: ELON_QUIT_SALE_ADDRESS,
    functionName: "getSaleStatus",
  });

  const formatBalance = bnbBalance
    ? parseFloat(bnbBalance.formatted).toFixed(4)
    : "0";

  return (
    <div className="bg-card/30 backdrop-blur-md rounded-xl p-6 border border-border/50">
      <h2 className="text-2xl text-white font-bold mb-6">Commit BNB</h2>

      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <div className="text-white">Balance</div>
          <div className="text-white/60">{formatBalance} BNB</div>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            className="w-full bg-black/40 border border-white/20 rounded-l-lg p-2 text-white"
            placeholder="BNB Amounts"
            value={buyAmount}
            onChange={(e) => setBuyAmount(e.target.value)}
          />
          <span className="bg-black/60 border border-l-0 border-white/20 rounded-r-lg p-2 text-primary">
            BNB
          </span>
        </div>
      </div>
      <div className="mb-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            Min Buy <span className="text-white/60">0.01 BNB</span>
          </div>
          <div className="flex justify-between">
            Max Buy <span className="text-white/60">10 BNB</span>
          </div>
          <div className="flex justify-between">
            Claimable <span className="text-white/60">0 QUIT</span>
          </div>
        </div>
      </div>
      <CommitButton
        buyAmount={buyAmount}
        saleStatus={saleStatus}
        isConnected={isConnected}
      />
      <HowToParticipate />
    </div>
  );
}

export default function Home() {
  const { data: endTime } = useReadContract({
    abi: ELON_QUIT_SALE_ABI,
    address: ELON_QUIT_SALE_ADDRESS,
    functionName: "endTime",
  });

  const formatEndTime = endTime ? Number(endTime) : 0;
  const endTimeMs = formatEndTime * 1000;

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 space-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-2/3">
            <div className="bg-card/30 backdrop-blur-md rounded-xl p-6 border border-border/50">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                    <Image
                      src="/images/quit-logo.png"
                      alt="Logo"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-1">
                      $QUIT
                    </h1>
                    <div className="flex items-center gap-2">
                      <span className="text-white/60 text-sm border p-1 rounded-lg">
                        Memecoin
                      </span>
                      <span className="text-green-500 flex items-center gap-1 bg-green-500/20 px-2 py-0.5 rounded text-xs">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Live
                      </span>
                    </div>
                  </div>
                </div>
                <div className="font-mono text-2xl md:text-3xl text-white ml-auto">
                  <CountdownTimer endTime={endTimeMs} />
                </div>
              </div>

              <LaunchStatus />
              <TokenInfo />
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <CommitBNB />
          </div>
        </div>
      </div>
    </section>
  );
}
