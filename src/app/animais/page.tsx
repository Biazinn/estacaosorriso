// app/animais/page.tsx
export default function AnimaisPage() {
  // === CONTATOS / LINKS ===
  const waNumber = "5548996975470";
  const waMsg = `Olá! Quero participar do projeto "Patas e afeto".
Posso ajudar com: (doações, divulgação)
Itens que posso doar: (ração, petiscos, brinquedos, cobertores)`;
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMsg)}`;

  const emailTo = "biazinisabela28@gmail.com";
  const subject = 'Quero participar – "Patas e afeto"';
  const body = `Olá!

Quero participar do projeto "Patas e afeto".
Posso contribuir com:
- Doações: (descrição)
- Voluntariado: (transporte, divulgação)

Obrigado!`;
  const mailtoHref = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const longTermGoal = 300; // meta de longo prazo do projeto (kits)

  return (
    <main className="bg-[#f8f4e8] text-slate-900">
      {/* HERO */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="mt-2 text-5xl md:text-6xl font-semibold tracking-tight">
          Patas e afeto
        </h1>
        <p className="mt-3 max-w-3xl mx-auto text-lg md:text-xl text-slate-700">
          Como doações podem transformar o Natal animal.
        </p>

        <div className="mt-8 mx-auto grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#00d757] px-6 font-medium text-black shadow hover:bg-[#029e40] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
          >
            Falar no WhatsApp
          </a>
          <a
            href={mailtoHref}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 font-medium text-black shadow hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
          >
            Enviar e-mail
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-700">
          Objetivo: até a véspera de Natal arrecadar fundos e itens para montar e entregar
          kits natalinos a abrigos e protetores. Meta de longo prazo:{" "}
          <strong>{longTermGoal} kits</strong>.
        </p>
      </section>

      {/* KIT NATALINO */}
      <section className="container mx-auto px-4 py-14 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">O Kit Natalino Animal contém</h2>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Ração e petiscos",
              desc: "Sacos fechados e dentro do prazo.",
            },
            {
              title: "Brinquedinho",
              desc: "Bola, corda ou pelúcia.",
            },
            {
              title: "Cartão de carinho",
              desc: "Uma mensagem especial para quem cuida.",
            },
            {
              title: "Apoio em dinheiro",
              desc: "Para custos como remédios e vacinas.",
            },
          ].map((i) => (
            <li key={i.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{i.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* COMO PARTICIPAR */}
      <section className="container mx-auto px-4 py-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">Como participar</h2>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Doe itens",
              desc: "Ração, brinquedos e petiscos nos pontos de coleta.",
            },
            {
              title: "Contribua em dinheiro",
              desc: "Qualquer valor ajuda — pequenas doações somam! (falar no whatsapp)",
            },
            {
              title: "Divulgue",
              desc: "Use a hashtag #pataseafeto e compartilhe nas redes.",
            },
            {
              title: "Entregue kits",
              desc: "Quer participar da entrega? Fale com a equipe.",
              action: { label: "Falar com a equipe", href: waLink },
            },
          ].map((card) => (
            <li key={card.title} className="flex flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-slate-600 flex-1">{card.desc}</p>
              {card.action && (
                <a
                  href={card.action.href}
                  target={card.action.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-lg bg-amber-500 px-4 text-sm font-medium text-black hover:bg-amber-600"
                >
                  {card.action.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* PROTETORES DE FLORIPA */}
      <section className="container mx-auto px-4 py-14 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">Protetores de Floripa</h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">DIBEA – Diretoria de Bem-Estar Animal</h3>
            <p className="mt-2 text-sm text-slate-600">
              Abrigo público oficial de Florianópolis (ligado ao CCZ – Centro de Controle de
              Zoonoses), no bairro Itacorubi. Responsável por políticas de proteção e bem-estar
              dos animais.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Protetor Paulo</h3>
            <p className="mt-2 text-sm text-slate-600">
              Abrigo independente, gerido por Paulo Santagelo em seu sítio na Grande
              Florianópolis, acolhendo mais de 400 cães resgatados das ruas de Santa Catarina.
            </p>
          </div>
        </div>
      </section>

      {/* MENSAGEM FINAL */}
      <section className="container mx-auto px-4 py-14">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
          <p className="text-lg text-slate-700">
            No Natal, enquanto muitos celebram, vários animais em abrigos carecem de
            carinho, comida e atenção. Sua doação pode mudar o Natal de um animal. 💛
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-[#00d757] px-6 font-medium text-black shadow hover:bg-[#029e40]"
            >
              Quero ajudar agora
            </a>
            <a
              href={mailtoHref}
              className="inline-flex h-12 items-center justify-center rounded-lg bg-amber-500 px-6 font-medium text-black shadow hover:bg-amber-600"
            >
              Falar por e-mail
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
