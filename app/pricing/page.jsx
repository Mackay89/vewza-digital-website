// app/pricing/page.jsx

const plans = [
  {
    name: "Starter",
    price: "R5,000",
    suffix: "starting from",
    features: ["Logo Design", "5-Page Website", "Basic SEO", "Business Email"],
    highlighted: false,
  },
  {
    name: "Business",
    price: "R15,000",
    suffix: "starting from",
    features: ["Branding Package", "Website", "Social Media Setup", "SEO", "Google Business Profile"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    suffix: "",
    features: ["Custom Website", "Mobile App", "Marketing Strategy", "AI Integration", "Ongoing Support"],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-br from-[#0d0a2b] via-[#160f45] to-[#2a1263] px-6 py-20 text-center text-white">
        <span className="inline-block rounded-full bg-purple-500/20 px-4 py-1 text-xs font-semibold tracking-wide text-purple-200">
          PRICING
        </span>
        <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Plans Built to Fit Your Growth</h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Transparent pricing for every stage — from your first website to a full digital transformation.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 shadow-sm ring-1 transition hover:shadow-lg ${
                plan.highlighted
                  ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white ring-purple-300 scale-105"
                  : "bg-white text-slate-900 ring-slate-100"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-purple-700 shadow">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold">{plan.name}</h3>

              <div className="mt-4">
                {plan.suffix && (
                  <p
                    className={`text-xs uppercase tracking-wide ${
                      plan.highlighted ? "text-purple-100" : "text-slate-400"
                    }`}
                  >
                    {plan.suffix}
                  </p>
                )}
                <p className="text-3xl font-extrabold">{plan.price}</p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className={plan.highlighted ? "text-white" : "text-purple-600"}>
                      ✓
                    </span>
                    <span className={plan.highlighted ? "text-purple-50" : "text-slate-600"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a href="/contact" className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${plan.highlighted ? "bg-white text-purple-700 hover:bg-purple-50" : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90"}`}>
                {plan.name === "Enterprise" ? "Request a Quote" : "Get Started"}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          All prices are in South African Rand (ZAR) and exclude VAT. Need something more specific?{" "}
          <a href="/contact" className="font-medium text-purple-600">
            Talk to our team →
          </a>
        </p>
      </section>
    </div>
  );
}
