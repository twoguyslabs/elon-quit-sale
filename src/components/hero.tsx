import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 space-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-2/3">
            <div className="bg-card/30 backdrop-blur-md rounded-xl p-6 border border-border/50">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                    <Image
                      src="https://ext.same-assets.com/1998532411/1221894115.jpeg"
                      alt="Logo"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-1">$RAGE TOKEN</h1>
                    <div className="flex items-center gap-2">
                      <span className="text-primary/90 font-mono">$RAGE</span>
                      <span className="text-white/60 text-sm">Entertainment</span>
                      <span className="text-green-500 flex items-center gap-1 bg-green-500/20 px-2 py-0.5 rounded text-xs">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Live
                      </span>
                    </div>
                  </div>
                </div>
                <div className="font-mono text-2xl md:text-3xl text-white ml-auto">
                  04h 32m 49s
                </div>
              </div>

              <div className="bg-black/40 rounded-lg p-4 mb-6">
                <h2 className="text-xl text-white mb-4">Launch Status</h2>
                <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                  <div className="text-lg text-white">Total $RAGE Committed</div>
                  <div className="flex gap-2 items-baseline">
                    <span className="font-mono text-xl text-primary">171,330.28</span>
                    <span className="text-white/60">/</span>
                    <span className="font-mono text-white/60">42,425</span>
                    <span className="bg-green-500/20 text-green-500 font-mono text-sm px-2 py-0.5 rounded">
                      403.84%
                    </span>
                  </div>
                </div>
                <Progress value={100} className="h-2 mb-4" />

                <div className="flex justify-between mb-4">
                  <div className="text-lg text-white">802 Participants</div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-white">
                    <thead className="text-white/60 border-b border-white/20">
                      <tr>
                        <th className="text-left py-2 pr-4 font-normal">Rank</th>
                        <th className="text-left py-2 px-4 font-normal">Address</th>
                        <th className="text-right py-2 pl-4 font-normal">Points Pledged</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { rank: 1, address: '0x96e5...13031', points: '1,000,000' },
                        { rank: 2, address: '0x99b7...3D29', points: '336,232' },
                        { rank: 3, address: '0xC333...6B6dd', points: '275,000' },
                        { rank: 4, address: '0x7559...41FB', points: '272,000' },
                        { rank: 5, address: '0xB376...AB73', points: '269,395' },
                      ].map((row, index) => (
                        <tr key={index} className="border-b border-white/10">
                          <td className="py-3 pr-4">{row.rank}</td>
                          <td className="py-3 px-4 font-mono">{row.address}</td>
                          <td className="py-3 pl-4 text-right font-mono">{row.points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-black/40 rounded-lg p-4">
                <h2 className="text-xl text-white mb-4">Why This Token Is Awesome</h2>
                <p className="text-white/80 leading-relaxed">
                  RAGE TOKEN (Revolutionary And Game-changing Experience) is the first community-focused token
                  built with anger for the people, blending decentralized governance, gaming, and passionate community.
                  Our mission is to give traders true ownership, creative power, and economic rewards by
                  allowing them to shape the future of rage-driven finance.
                </p>

                <div className="mt-4 flex gap-4">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                    </svg>
                    Twitter
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    Telegram
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-card/30 backdrop-blur-md rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl text-white font-bold mb-6">Pledge & Commit</h2>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <div className="text-white">Pledge Points</div>
                  <div className="text-white/60">0 Max</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full bg-black/40 border border-white/20 rounded-l-lg p-2 text-white"
                    placeholder="0"
                  />
                  <span className="bg-black/60 border border-l-0 border-white/20 rounded-r-lg p-2 text-white/60">
                    points
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <div className="text-white">Suggested $RAGE to commit</div>
                  <div className="text-white/60">0 <span className="text-primary">$</span></div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <div className="text-white">Commit $RAGE</div>
                  <div className="text-white/60">Balance: 0</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full bg-black/40 border border-white/20 rounded-l-lg p-2 text-white"
                    placeholder="566 Max"
                  />
                  <span className="bg-black/60 border border-l-0 border-white/20 rounded-r-lg p-2 text-primary">
                    RAGE
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <div className="text-white">Estimated Allocation</div>
                  <div className="text-white/60">0 <span className="text-primary">$</span></div>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6">
                Connect Wallet
              </Button>

              <div className="mt-8">
                <h3 className="text-xl text-white mb-4">How to Participate</h3>

                <div className="mb-4">
                  <div className="flex gap-2 mb-2">
                    <div className="text-xl text-white font-bold">1.</div>
                    <div className="text-xl text-white font-bold">Pledge points</div>
                  </div>
                  <p className="text-white/70 text-sm pl-6">
                    Pledge your Points to receive an estimated token allocation up to a cap of 0.5% of total supply.
                    Your final allocation depends on your pledged points relative to the total points pledged.
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex gap-2 mb-2">
                    <div className="text-xl text-white font-bold">2.</div>
                    <div className="text-xl text-white font-bold">Commit $RAGE</div>
                  </div>
                  <p className="text-white/70 text-sm pl-6">
                    Commit up to 566 $RAGE to potentially secure your maximum allocation.
                    If participation exceeds expectations, your allocation will be diluted and any excess $RAGE will be refunded.
                  </p>
                </div>

                <div>
                  <div className="flex gap-2 mb-2">
                    <div className="text-xl text-white font-bold">3.</div>
                    <div className="text-xl text-white font-bold">Claim your tokens</div>
                  </div>
                  <p className="text-white/70 text-sm pl-6">
                    Go to the Token page once the Genesis Launch succeeds to claim your purchased tokens.
                    If the launch fails, all points and $RAGE will be refunded.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
