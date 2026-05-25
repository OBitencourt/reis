const TrustBar = () => {
  return (
    <section className="border-b border-zinc-200 w-full">
      <div className=" max-w-7xl mx-auto py-8 grid md:grid-cols-3 gap-8">
        {[
          "Mais de 120 projetos entregues",
          "Equipe especializada",
          "Atendimento rápido e transparente",
        ].map((item) => (
          <div
            key={item}
            className="text-center text-sm uppercase justify-center tracking-[0.18em] text-zinc-400"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar