import { Progress } from '@/components/ui/progress';

export default function Tokenomics() {
  const tokenomics = [
    { name: "Community", percentage: 50, color: "bg-blue-500" },
    { name: "Development", percentage: 25, color: "bg-green-500" },
    { name: "Marketing", percentage: 15, color: "bg-yellow-500" },
    { name: "Airdrop", percentage: 10, color: "bg-red-500" },
  ];

  return (
    <section className="py-24 bg-card/30 backdrop-blur-sm space-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">ANGRY NUMBERS</h2>
          <div className="flex justify-center items-center gap-2 my-6">
            {['$RAGE', 'FURY', '$RAGE', 'FURY'].map((word, index) => (
              <span key={`token-${index}`} className={index % 2 === 0 ? "text-primary font-bold" : "text-secondary font-bold"}>
                {word}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              RAGE-DRIVEN TOKENOMICS
            </h3>

            <div className="space-y-6">
              {tokenomics.map((item, index) => (
                <div key={`tokenomics-${index}`}>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full ${item.color}`} />
                      <span className="text-white font-medium">{item.name}</span>
                    </div>
                    <span className="text-white font-mono">{item.percentage}%</span>
                  </div>
                  <Progress value={item.percentage} className={`h-2 ${item.color}`} />
                </div>
              ))}
            </div>

            <div className="mt-10">
              <ul className="space-y-4 text-white">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-0.5 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold block mb-1">50% Community Rage:</span>
                    <p className="text-white/70 text-sm">
                      Half our supply goes directly to our community of angry traders. The power belongs to YOU.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold block mb-1">25% Development:</span>
                    <p className="text-white/70 text-sm">
                      A quarter of our supply is dedicated to developing the RAGE ecosystem further, ensuring long-term growth and innovation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center mt-0.5 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold block mb-1">15% Marketing:</span>
                    <p className="text-white/70 text-sm">
                      Spreading the rage far and wide. We're not quiet about our mission to revolutionize the crypto space.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mt-0.5 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold block mb-1">10% Airdrop:</span>
                    <p className="text-white/70 text-sm">
                      Airdropping 10% of the supply to the community to reward early supporters and generate more interest.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-black/40 p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-white">
              RAGE-DRIVEN STATISTICS
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-500/30">
                <div className="text-blue-400 text-5xl font-bold mb-2">50%</div>
                <div className="text-white text-sm">COMMUNITY RAGE</div>
              </div>
              <div className="bg-green-900/30 p-6 rounded-lg border border-green-500/30">
                <div className="text-green-400 text-5xl font-bold mb-2">25%</div>
                <div className="text-white text-sm">DEVELOPMENT</div>
              </div>
              <div className="bg-yellow-900/30 p-6 rounded-lg border border-yellow-500/30">
                <div className="text-yellow-400 text-5xl font-bold mb-2">15%</div>
                <div className="text-white text-sm">MARKETING</div>
              </div>
              <div className="bg-red-900/30 p-6 rounded-lg border border-red-500/30">
                <div className="text-red-400 text-5xl font-bold mb-2">10%</div>
                <div className="text-white text-sm">AIRDROP MECHANISM</div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4 text-white">Token Details</h4>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/70">Token Name</span>
                  <span className="text-white font-medium">RAGE Token</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/70">Symbol</span>
                  <span className="text-white font-medium">$RAGE</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/70">Total Supply</span>
                  <span className="text-white font-medium">1,000,000,000</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/70">Launch Price</span>
                  <span className="text-white font-medium">$0.00001</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/70">Network</span>
                  <span className="text-white font-medium">Ethereum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
