export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8 leading-tight">
          Ideas become clear here.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12">
          Tech, crypto, and AI explained without the hype.
          <br />
          No noise. No fake excitement.
          <br />
          Just clarity, one thought at a time.
        </p>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            This is a place for people who want to <strong>understand</strong>, not just consume.
          </p>
          <p>
            Where you see the <em>why</em> before the <em>how</em>.
          </p>
          <p>
            Where you learn what actually matters—and skip the rest.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-200">
        <h2 className="text-3xl font-light mb-8">What we believe</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-medium mb-2">Stay curious</h3>
            <p className="text-gray-600 leading-relaxed">
              Ask questions. Challenge assumptions. Never stop learning.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Stay consistent</h3>
            <p className="text-gray-600 leading-relaxed">
              Real progress happens slowly. Show up. Build. Repeat.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Stay grounded</h3>
            <p className="text-gray-600 leading-relaxed">
              Cut through the hype. Focus on what's real and useful.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-200">
        <h2 className="text-3xl font-light mb-8">What we explore</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-3">Tech</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              How technology shapes our world—and how to use it wisely.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Crypto</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Beyond the hype: what blockchain actually does and why it matters.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">AI</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Understanding artificial intelligence without the fear or fantasy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-200">
        <p className="text-2xl font-light text-gray-700 leading-relaxed">
          Building, learning, and sharing—one clear thought at a time.
        </p>
        <p className="mt-6 text-gray-500">
          More coming soon.
        </p>
      </section>
    </div>
  );
}

