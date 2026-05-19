const TrustBar = () => {
  return (
    <section className="border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">
        {[
          "Mais de 120 projetos entregues",
          "Equipe especializada",
          "Atendimento rápido e transparente",
        ].map((item) => (
          <div
            key={item}
            className="text-center text-sm uppercase tracking-[0.18em] text-zinc-400"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar