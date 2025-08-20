export default function HomePage() {
  // Ajuste estes números quando tiver dados reais:
  const meta = { goal: 1000, collected: 0 };
  const percent = Math.min(100, Math.round((meta.collected / meta.goal) * 100));

  return (
    <main className="bg-[#f8f4e8] text-slate-900">
      {/* HERO */}
      <section className="container mx-auto px-4 py-16 text-center">

        <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight">
          Bem‑vindo à estação <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">sorriso</span>.
        </h1>

        <p className="mt-6 max-w-4xl mx-auto text-lg md:text-xl text-slate-700">
          Em cada criança mora um universo de sonhos, imaginação e alegria. Pensando nisso, nasce o Estação Sorriso, um projeto de arrecadação de brinquedos que convida nossa comunidade escolar a transformar generosidade em sorrisos!
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#como-doar"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-base font-medium bg-orange-500 text-white hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
          >
            Quero doar
          </a>
          <a
            href="#voluntario"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-base font-medium bg-white text-slate-900 ring-1 ring-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500"
          >
            Quero ser voluntário
          </a>
        </div>

        {/* Barra de progresso */}
        <div className="mt-10 w-full max-w-2xl mx-auto">
          <div className="flex items-center justify-between text-sm font-medium">
            <span>Meta: {meta.goal} brinquedos</span>
            <span aria-live="polite">
              {meta.collected} arrecadados ({percent}%)
            </span>
          </div>
          <div
            className="mt-2 h-3 rounded-full bg-slate-200"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={percent}
          >
            <div
              className="h-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </section>

      {/* O que buscamos */}
      <section id="o-que-buscamos" className="container mx-auto px-4 py-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">O que buscamos</h2>
        <p className="mt-3 text-center text-slate-600">
          Aceitamos itens novos ou seminovos, limpos e em bom estado.
        </p>

        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Brinquedos', desc: 'Carrinhos, bonecas, blocos de montar, pelúcias higienizadas.' },
            { title: 'Livros infantis', desc: 'De 0–12 anos, sem rasgos ou rabiscos.' },
            { title: 'Jogos de tabuleiro', desc: 'Com todas as peças.' },
            { title: 'Materiais artísticos', desc: 'Massinhas, lápis de cor, giz, tintas atóxicas.' },
          ].map((item) => (
            <li key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 text-center text-sm text-slate-600">
          <span className="inline-flex items-center gap-2">
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.39 7.39a1 1 0 01-1.415 0L3.296 9.486a1 1 0 011.414-1.415l3.004 3.003 6.683-6.683a1 1 0 011.307-.102z" clipRule="evenodd" /></svg>
            Higienize os itens e coloque pilhas/baterias quando necessário.
          </span>
        </div>
      </section>

      {/* O que NÃO aceitamos */}
      <section className="container mx-auto px-4 py-14 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          O que <span className="text-red-600">não</span> aceitamos
        </h2>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Brinquedos quebrados ou com peças faltando',
            'Itens sem higiene (mofo, cheiro forte, manchas)',
            'Itens perigosos: pontiagudos, inflamáveis ou sem selo de segurança',
          ].map((text) => (
            <li key={text} className="flex items-start gap-3 rounded-xl border border-rose-200/60 bg-rose-50 p-5">
              <svg className="mt-1 h-5 w-5 flex-none text-rose-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2Zm1 14h-2v-2h2Zm0-4h-2V6h2Z" /></svg>
              <p className="text-sm text-slate-700">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Como funciona (linha do tempo) */}
      <section id="como-doar" className="container mx-auto px-4 py-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">Como funciona</h2>
        <ol className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { etapa: '1. Entregue', texto: 'Leve sua doação a um ponto de coleta.' },
            { etapa: '2. Triagem', texto: 'Conferimos estado e organizamos por faixa etária.' },
            { etapa: '3. Higienização', texto: 'Limpeza e verificação de segurança.' },
            { etapa: '4. Entrega', texto: 'Distribuição em instituições parceiras.' },
          ].map((s) => (
            <li key={s.etapa} className="relative rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <span className="absolute -top-4 left-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white text-sm font-bold">
                {s.etapa.split('.')[0]}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{s.etapa}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.texto}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Pontos de coleta */}
      <section id="pontos-de-coleta" className="container mx-auto px-4 py-14 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">Pontos de coleta</h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ul role="list" className="space-y-4">
            {[
              { nome: 'Escola IENI', endereco: 'Rod. Tertuliano Brito Xavier, 1789 – Canasvieiras', horario: 'Seg–Sex, 7:30h–12:30h' },
              { nome: 'ELITI Kids', endereco: 'Rua José Rosa, Esq, Tv. do Skate, – Bairro Canasvieiras', horario: 'Terças-feiras, 18:30h–21h' },
            ].map((p) => (
              <li key={p.nome} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold">{p.nome}</h3>
                <p className="text-sm text-slate-600">{p.endereco}</p>
                <p className="text-sm text-slate-600"><strong>Horário:</strong> {p.horario}</p>
              </li>
            ))}
          </ul>

          {/* Substitua o src por um mapa real dos seus endereços */}
          <div className="rounded-xl overflow-hidden ring-1 ring-slate-200">
            <iframe
              title="Mapa dos pontos de coleta"
              className="h-[320px] w-full"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sBR!4v0000000000"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Impacto / Resultados */}
      <section className="container mx-auto px-4 py-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">Impacto</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { numero: '0', legenda: 'brinquedos doados desde 2025' },
            { numero: '0', legenda: 'famílias beneficiadas' },
            { numero: '4', legenda: 'voluntários ativos' },
          ].map((k) => (
            <div key={k.legenda} className="rounded-xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
              <div className="text-4xl font-extrabold">{k.numero}</div>
              <div className="mt-2 text-sm text-slate-600">{k.legenda}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container mx-auto px-4 py-14 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">Perguntas frequentes</h2>
        <div className="mt-8 max-w-3xl mx-auto divide-y divide-slate-200">
          {[
            { q: 'Os brinquedos precisam ser novos?', a: 'Não. Aceitamos seminovos em bom estado, limpos e completos.' },
            { q: 'Onde entrego a doação?', a: 'Veja os pontos de coleta acima ou entre em contato para agendar.' },
            { q: 'Posso doar dinheiro?', a: 'Sim, usamos para compra de brinquedos e materiais. Entre em contato para Pix.' },
          ].map((item) => (
            <details key={item.q} className="group p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>{item.q}</span>
                <span className="transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contato / Voluntário */}
      <section id="voluntario" className="container mx-auto px-4 py-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">Participe</h2>
        <form
          action="/api/voluntario"
          method="POST"
          className="mx-auto mt-8 max-w-xl space-y-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
        >
          {/* Honeypot anti-spam (fica oculto) */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div>
            <label htmlFor="nome" className="block text-sm font-medium">Nome</label>
            <input id="nome" name="nome" type="text" required className="mt-1 w-full rounded-lg border border-slate-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-slate-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label htmlFor="telefone" className="block text-sm font-medium">WhatsApp</label>
              <input id="telefone" name="telefone" type="tel" className="mt-1 w-full rounded-lg border border-slate-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
          </div>
          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows={4} className="mt-1 w-full rounded-lg border border-slate-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
          </div>

          <button type="submit" className="inline-flex w-full items-center justify-center rounded-lg bg-orange-500 px-5 py-3 font-medium text-white hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500">
            Enviar
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-slate-600">
          Prefere falar direto?
          {' '} • <a href="https://wa.me/5548996975470" className="font-medium text-orange-600 underline">Chamar no WhatsApp</a>
        </p>
      </section>


    </main>
  );
}

