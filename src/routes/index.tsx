import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Play, Info, Bell, Search, X, Lock } from "lucide-react";
import praiaAsset from "@/assets/praia.jpg.asset.json";
import voleiAsset from "@/assets/volei.jpg.asset.json";
import marAsset from "@/assets/mar.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alexander y Evelyn — Nossa Série" },
      { name: "description", content: "Uma história em temporadas. Para o meu amor." },
    ],
  }),
  component: Index,
});

type Season = {
  id: string;
  numero: string;
  titulo: string;
  data: string;
  descricao: string;
  hero: string;
  galeria: string[];
  videoUrl: string;
  emBreve?: boolean;
};

const TEMPORADAS: Season[] = [
  {
    id: "t1",
    numero: "TEMPORADA 1",
    titulo: "O Primeiro Capítulo",
    data: "ONDE TUDO COMEÇOU",
    descricao:
      "Dois olhares, um sorriso e a certeza de que aquele verão mudaria tudo. A temporada de estreia traz os primeiros 'eu te amo', as risadas sem motivo e o som do mar como trilha sonora do nosso começo.",
    hero: praiaAsset.url,
    galeria: [praiaAsset.url],
    videoUrl: "", // cole aqui o link do vídeo da temporada 1
  },
  {
    id: "t2",
    numero: "TEMPORADA 2",
    titulo: "Nosso Jogo a Dois",
    data: "PARCERIA DENTRO E FORA DA QUADRA",
    descricao:
      "A vida ficou mais intensa: vitórias, derrotas, treinos, viagens e a certeza de que somos o melhor time. Nesta temporada, descobrimos que amar também é segurar a mão do outro mesmo quando o jogo está difícil.",
    hero: voleiAsset.url,
    galeria: [voleiAsset.url],
    videoUrl: "", // cole aqui o link do vídeo da temporada 2
  },
  {
    id: "t3",
    numero: "TEMPORADA 3",
    titulo: "O Que Ainda Viveremos",
    data: "EM BREVE",
    descricao:
      "Novos destinos, novos sonhos, novos 'para sempre'. A próxima temporada ainda está sendo escrita — e o melhor é que será escrita com você. Prepare o coração: as melhores cenas ainda estão por vir.",
    hero: marAsset.url,
    galeria: [],
    videoUrl: "",
    emBreve: true,
  },
];

function Index() {
  const [atual, setAtual] = useState<string>(TEMPORADAS[0].id);
  const [videoAberto, setVideoAberto] = useState(false);
  const [imagemAberta, setImagemAberta] = useState<string | null>(null);
  const temporada = TEMPORADAS.find((t) => t.id === atual)!;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* HEADER */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 py-5">
        <div className="flex items-center gap-8">
          <span className="text-[#e50914] text-3xl md:text-4xl font-black tracking-tighter">
            NETFLIX
          </span>
        </div>
        <div className="flex items-center gap-5">
          <Search className="w-5 h-5 md:w-6 md:h-6" />
          <Bell className="w-5 h-5 md:w-6 md:h-6" />
          <div className="w-7 h-7 md:w-8 md:h-8 rounded bg-gradient-to-br from-pink-500 to-red-600" />
        </div>
      </header>

      {/* HERO */}
      <section
        key={temporada.id}
        className="relative min-h-[100vh] flex items-end animate-[fadeIn_0.6s_ease]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${temporada.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent" />

        <div className="relative z-10 w-full px-6 md:px-12 pb-16 md:pb-24 max-w-3xl">
          {/* Season selector */}
          <div className="mb-6">
            <label className="block text-xs tracking-[0.3em] text-white/60 mb-2">
              ESCOLHA A TEMPORADA
            </label>
            <select
              value={atual}
              onChange={(e) => setAtual(e.target.value)}
              className="bg-black/60 backdrop-blur border border-white/30 px-4 py-2.5 text-sm md:text-base rounded-sm focus:outline-none focus:border-white cursor-pointer hover:bg-black/80 transition"
            >
              {TEMPORADAS.map((t) => (
                <option key={t.id} value={t.id} className="bg-black">
                  {t.numero} — {t.titulo}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#e50914] text-3xl font-black">N</span>
            <span className="tracking-[0.4em] text-sm">SÉRIE</span>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl mb-4 leading-[0.95]"
            style={{ fontFamily: "'Caveat', 'Kalam', cursive", fontWeight: 700 }}
          >
            Alexander y<br />Evelyn
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-5 text-sm md:text-base">
            <span className="bg-[#e50914] px-2 py-0.5 text-xs font-bold rounded-sm flex flex-col items-center leading-tight">
              <span className="text-[9px]">TOP</span>
              <span>10</span>
            </span>
            <span className="font-semibold tracking-wider">{temporada.data}</span>
            <span className="font-semibold tracking-wider text-white/80">
              {temporada.numero}
            </span>
          </div>

          <p className="text-sm md:text-base text-white/90 leading-relaxed mb-6 max-w-2xl">
            {temporada.descricao}
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setVideoAberto(true)}
              disabled={temporada.emBreve}
              className="flex items-center gap-2 bg-white text-black px-6 md:px-8 py-2.5 md:py-3 rounded font-bold text-base md:text-lg hover:bg-white/80 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {temporada.emBreve ? <Lock className="w-5 h-5" /> : <Play className="w-5 h-5 fill-black" />}
              {temporada.emBreve ? "Em Breve" : "Assistir"}
            </button>
            <button className="flex items-center gap-2 bg-white/20 backdrop-blur text-white px-6 md:px-8 py-2.5 md:py-3 rounded font-bold text-base md:text-lg hover:bg-white/30 transition">
              <Info className="w-5 h-5" />
              Info
            </button>
          </div>
        </div>
      </section>

      {/* EPISÓDIOS / GALERIA */}
      <section className="px-6 md:px-12 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Episódios</h2>

        {temporada.emBreve ? (
          <div className="border border-white/10 rounded-lg p-12 md:p-20 text-center bg-gradient-to-br from-white/[0.03] to-transparent">
            <Lock className="w-12 h-12 mx-auto mb-4 text-white/40" />
            <h3
              className="text-4xl md:text-5xl mb-3"
              style={{ fontFamily: "'Caveat', cursive", fontWeight: 700 }}
            >
              Em breve
            </h3>
            <p className="text-white/60 max-w-md mx-auto">
              Esta temporada ainda viveremos juntos. As cenas mais bonitas ainda
              estão por acontecer. ❤️
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {temporada.galeria.map((src, i) => (
              <button
                key={i}
                onClick={() => setImagemAberta(src)}
                className="group relative aspect-[3/4] overflow-hidden rounded-md bg-white/5 hover:ring-2 hover:ring-white transition"
              >
                <img
                  src={src}
                  alt={`Episódio ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-2 left-2 text-xs font-bold opacity-0 group-hover:opacity-100 transition">
                  Ep. {i + 1}
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* VIDEO MODAL */}
      {videoAberto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setVideoAberto(false)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-white/70"
            onClick={() => setVideoAberto(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {temporada.videoUrl ? (
              <video
                src={temporada.videoUrl}
                controls
                autoPlay
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
                <Play className="w-16 h-16 mb-4 text-[#e50914]" />
                <h3 className="text-2xl font-bold mb-2">
                  Vídeo da {temporada.numero}
                </h3>
                <p className="text-white/60 max-w-md">
                  Adicione o link do vídeo no campo{" "}
                  <code className="bg-white/10 px-2 py-0.5 rounded text-sm">
                    videoUrl
                  </code>{" "}
                  desta temporada em <code className="bg-white/10 px-2 py-0.5 rounded text-sm">src/routes/index.tsx</code>.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* IMAGEM MODAL */}
      {imagemAberta && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setImagemAberta(null)}
        >
          <button className="absolute top-6 right-6 text-white">
            <X className="w-8 h-8" />
          </button>
          <img
            src={imagemAberta}
            alt="Ampliada"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}

      <footer className="px-6 md:px-12 py-8 text-center text-white/40 text-sm border-t border-white/10">
        Feito com ❤️ — Uma série original sobre nós.
      </footer>
    </div>
  );
}
