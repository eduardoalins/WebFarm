import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Linkedin } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const SobreNos = () => {
  const [activeTab, setActiveTab] = useState<'empresa' | 'socios'>('empresa');
  const [selectedEvento, setSelectedEvento] = useState<typeof eventos[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

const eventos = [
  {
    id: 1,
    titulo: "Geração de Energia Renovável",
    data: "2024",
    imagem: "/static/ImagemEvento1.jpg",
    descricao: "Projetos customizados em solar, eólica, biomassa e hidráulica",
    descricaoCompleta: "Projetos customizados em solar, eólica, biomassa e hidráulica, da concepção à operação, garantindo máxima eficiência e sustentabilidade em cada megawatt gerado."
  },
  {
    id: 2,
    titulo: "Armazenamento de Energia",
    data: "2024",
    imagem: "/static/ImagemEvento2.jpg",
    descricao: "Sistemas avançados de armazenamento para equilibrar oferta e demanda",
    descricaoCompleta: "Projetamos sistemas de armazenamento avançado, como baterias, hidrelétricas reversíveis, otimizando equilíbrio entre oferta e demanda e reforçando a segurança energética."
  },
  {
    id: 3,
    titulo: "Mercado de Carbono",
    data: "2024",
    imagem: "/static/ImagemEvento3.jpg",
    descricao: "Consultoria em inventários, créditos e intermediação nos mercados",
    descricaoCompleta: "Oferecemos consultoria completa em carbono, envolvendo quantificação de emissões, criação de projetos de créditos e intermediação no mercado regulado e voluntário."
  },
  {
    id: 4,
    titulo: "Programa de Eficiência Energética",
    data: "2024",
    imagem: "/static/ImagemEvento4.jpg",
    descricao: "Programas para otimizar consumo, reduzir custos e desperdícios",
    descricaoCompleta: "Desenvolvemos e implementamos programas para otimizar o consumo, reduzir custos operacionais e minimizar desperdícios em instalações industriais, comerciais e residenciais."
  },
  {
    id: 5,
    titulo: "Consultoria em Gestão e Marco Regulatório",
    data: "2024",
    imagem: "/static/ImagemEvento5.jpg",
    descricao: "Assessoria em governança, compliance e regulação do setor elétrico",
    descricaoCompleta: "Assessoria estratégica em governança, compliance e regulação, navegando pelas normas do setor elétrico para viabilizar projetos e garantir conformidade legal."
  },
  {
    id: 6,
    titulo: "Estruturação e Prospecção de Negócios",
    data: "2024",
    imagem: "/static/ImagemEvento6.jpg",
    descricao: "Conectamos investidores e parceiros para maximizar retorno",
    descricaoCompleta: "Planejamos e intermediamos oportunidades comerciais, conectando investidores, parceiros e empreendedores para estruturar negócios e maximizar retorno financeiro."
  },
  {
    id: 7,
    titulo: "Suporte a Leilões de Geração e Transmissão",
    data: "2024",
    imagem: "/static/ImagemEvento7.jpg",
    descricao: "Apoio do edital à negociação de contratos em leilões de energia",
    descricaoCompleta: "Apoiamos projetos consolidados em todas as etapas dos leilões de energia, da análise de edital à negociação de contratos."
  },
  {
    id: 8,
    titulo: "Engenharia do Proprietário",
    data: "2024",
    imagem: "/static/ImagemEvento8.jpg",
    descricao: "Gestão de fornecedores, qualidade, prazos e custos",
    descricaoCompleta: "Atuamos como extensão interna do cliente, gerenciando fornecedores e garantindo qualidade técnica, cumprimento de prazos e controle de custos em empreendimentos."
  },
  {
    id: 9,
    titulo: "Licenciamento Ambiental",
    data: "2024",
    imagem: "/static/ImagemEvento9.jpg",
    descricao: "EIA, audiências públicas e obtenção de aprovações",
    descricaoCompleta: "Orientamos processos de licenciamento, preparando estudos de impacto, conduzindo audiências públicas e garantindo aprovação junto a órgãos competentes."
  },
  {
    id: 10,
    titulo: "Modais de Transporte",
    data: "2024",
    imagem: "/static/ImagemEvento10.jpg",
    descricao: "Soluções logísticas integrando rodovias, ferrovias, hidrovias e portos",
    descricaoCompleta: "Projetamos soluções logísticas e de transporte para energia e insumos, integrando rodovia, ferrovia, hidrovia e portos, otimizando fluxo e redução de custos."
  }
];


  const cardsInfo = [
    {
      titulo: "Missão",
      icone: "/static/MissaoImagem.png",
      descricao: "Oferecer serviços de engenharia e consultoria na área de energia, atuando com competência, transparência e ética, com foco na sustentabilidade."
    },
    {
      titulo: "Visão",
      icone: "/static/VisaoImagem.png",
      descricao: "Ser reconhecida dentre os melhores fornecedores de serviços de engenharia e consultoria na área de energia."
    },
    {
      titulo: "Valores",
      icone: "/static/ValoresImagem.png",
      descricao: "Inovação, Ética, Integridade e Responsabilidade nos guiam para a construção de credibilidade com serviços comprometidos com a sustentabilidade."
    }
  ];

  return (
    <div className="min-h-screen font-ibm-plex">
      <Header />
      
      {/* Hero Section com Onda */}
      <section className="relative h-[400px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${activeTab === 'empresa' ? '/static/imagemCentralAbout.png' : '/static/imagemCentralSocios.png'}')`
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-ibm-plex text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {activeTab === 'empresa' ? 'Nossa Empresa' : 'Nossos Sócios'} {/* Empresa */} {/* Socios */}
            </h1>
            <p className="font-ibm-plex text-xl text-white leading-relaxed">
              {activeTab === 'empresa' 
                ? 'Modelando o futuro da energia no Brasil'
                : 'Conheça os profissionais que lideram nossa missão'
              } {/* Empresa */} 
                {/* Socios */}
            </p>
          </div>
        </div>
        
        {/* Onda decorativa */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" className="w-full h-20" preserveAspectRatio="none">
            <path d="M0,60 Q300,100 600,60 T1200,60 L1200,120 L0,120 Z" fill="#1EC4BF" />
            <path d="M0,80 Q300,110 600,80 T1200,80 L1200,120 L0,120 Z" fill="#F5F5F5" />
          </svg>
        </div>
      </section>

      {/* Navigation Tabs - Abaixo da onda */}
      <div className="bg-farm-light py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab('empresa')}
              className={`font-ibm-plex font-semibold text-lg px-6 py-2 rounded-lg transition-all ${
                activeTab === 'empresa'
                  ? 'bg-farm-secondary text-white'
                  : 'text-farm-dark hover:text-farm-secondary'
              }`}
            >
              Empresa
            </button>
            <button
              onClick={() => setActiveTab('socios')}
              className={`font-ibm-plex font-semibold text-lg px-6 py-2 rounded-lg transition-all ${
                activeTab === 'socios'
                  ? 'bg-farm-secondary text-white'
                  : 'text-farm-dark hover:text-farm-secondary'
              }`}
            >
              Sócios
            </button>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <main className="py-16 bg-farm-light">
        {activeTab === 'empresa' ? (
          <>
            {/* Seção A Empresa - Usando o mesmo grid dos cards */}
            <div className="container mx-auto px-4 mb-16">
              {/* Título centralizado respeitando o grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div></div>
                <div className="text-center">
                  <h2 className="font-ibm-plex text-4xl font-bold text-farm-dark">
                    A Empresa
                  </h2>
                </div>
                <div></div>
              </div>
              
              {/* Texto da empresa alinhado ao grid dos cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <p className="md:col-span-3 font-ibm-plex text-lg text-gray-600 leading-relaxed text-left">
                  A FARM Energia é uma sociedade formada por líderes com histórico de atuação em organizações
                  como Companhia Hidrelétrica do São Francisco, Companhia Energética de Pernambuco, Sistema de
                  Transmissão Nordeste, Transnorte Energia, IE Madeira, Jirau Energia, Norte Energia, Metrô do
                  Recife, Ministério de Minas e Energia, diversos complexos eólicos, dentre outras. Nossa equipe
                  domina áreas técnicas, regulatórias, financeiras e estratégicas, com forte presença em conselhos
                  de empresas do setor elétrico. Essa bagagem nos permite oferecer soluções completas e confiáveis
                  para os desafios do setor energético.
                </p>
              </div>
              
              {/* Nossa Trajetória - alinhado ao grid dos cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <h3 className="md:col-span-3 font-ibm-plex text-4xl font-bold text-farm-dark mb-8 text-left">
                  Nossa trajetória
                </h3>
                <div className="md:col-span-2">
                  <p className="font-ibm-plex text-lg text-gray-600 leading-relaxed mb-4 text-left">
                    Nossa história é construída sobre décadas de experiência:
                    <br /><br />
                    •	Liderança em projetos de geração e transmissão de energia.
                    <br />
                    •	Atuação em cargos estratégicos no setor público e privado.
                    <br />
                    •	Participação em conselhos de empresas como Norte Energia, Jirau Energia, CEPEL, Rumo S.A. e COPERGÁS.
                    <br />
                    •	Reconhecimento como referência em governança, compliance e inovação no setor elétrico. 
                    <br /><br />
                    A FARM Energia é a síntese dessa trajetória: uma empresa jovem com alma experiente.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/static/FotoTeste3.png" 
                    alt="Nossa trajetória" 
                    className="rounded w-full max-w-md object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Cards Missão, Visão, Valores */}
            <div className="container mx-auto px-4 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cardsInfo.map((card, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105 h-96 max-w-xs mx-auto w-full"
                  >
                    <div className="flex justify-center mb-6">
                      <img 
                        src={card.icone} 
                        alt={card.titulo}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <h3 className="font-ibm-plex font-bold text-xl text-farm-dark mb-4">
                      {card.titulo}
                    </h3>
                    <p className="font-ibm-plex text-gray-600 leading-relaxed text-sm">
                      {card.descricao}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Carrossel de Eventos - alinhado ao grid dos cards */}
            <div className="container mx-auto px-4">
              {/* Título centralizado respeitando o grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div></div>
                <div className="text-center">
                  <h2 className="font-ibm-plex text-3xl font-bold text-farm-dark">
                    Onde estamos presentes
                  </h2>
                </div>
                <div></div>
              </div>
              
              {/* Carrossel respeitando o grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-3">
                  <Carousel className="w-full" opts={{ loop: true }}>
                    <CarouselContent>
                      {eventos.map((evento) => (
                        <CarouselItem key={evento.id} className="md:basis-1/2 lg:basis-1/3">
                          <div 
                            className="bg-white rounded-lg overflow-hidden h-full cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            onClick={() => {
                              setSelectedEvento(evento);
                              setIsDialogOpen(true);
                            }}
                          >
                            <img 
                              src={evento.imagem} 
                              alt={evento.titulo}
                              className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                              <div className="text-farm-secondary font-ibm-plex font-semibold text-sm mb-2">
                                {evento.data}
                              </div>
                              <h3 className="font-ibm-plex font-bold text-lg text-farm-dark mb-3">
                                {evento.titulo}
                              </h3>
                              <p className="font-ibm-plex text-gray-600 text-sm leading-relaxed">
                                {evento.descricao}
                              </p>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Conteúdo para Sócios */
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              {/* Fábio Lopes Alves */}
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-125 hover:-translate-y-2">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="/static/FabioFarm.png" 
                      alt="Fábio Lopes Alves"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-ibm-plex font-bold text-2xl text-farm-dark">
                        <span className="text-[#1EC4BF] font-black">F</span>ábio Lopes Alves
                      </h3>
                      <a 
                        href="https://www.linkedin.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#1EC4BF] transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                    <div className="font-ibm-plex text-sm text-gray-600 leading-relaxed space-y-1">
                      <ul className="list-disc pl-5 space-y-1 marker:text-gray-500">
                      <li>Engenheiro Eletricista e de Produção</li>
                      <li>Engenheiro da Companhia Hidroelétrica do São Francisco – Chesf, com atuação nas áreas
                          de proteção, controle, telecomunicações, operação e manutenção, projeto e construção
                          de sistemas elétricos de potência</li>
                      <li>Presidente da Companhia Energética de Pernambuco – CELPE</li>
                      <li>Diretor Técnico da Empresa de Transmissão de Energia – Sistema de Transmissão Nordeste S.A. – STN</li>
                      <li>Diretor Administrativo Financeiro da Empresa de Transmissão de Energia – Transnorte Energia S.A. – TNE</li>
                      <li>Secretário de Energia Elétrica do Ministério de Minas e Energia – MME</li>
                      <li>Presidente da Companhia Hidroelétrica do São Francisco – Chesf</li>
                      <li>Conselheiro de 22 empresas de energia, dentre as quais: Norte Energia S.A. (Belo Monte),
                          Jirau Energia, Operador Nacional do Sistema Elétrico, Rumo S.A., Centro de Pesquisas de
                          Energia Elétrica – CEPEL, Centro de Memória da Eletricidade no Brasil.</li>
                      <li>Certificado pelo IBGC para Membro de Conselho de Administração (CCA+IBGC)</li>
                      <li>Contato: fabio@farmenergia.com.br, (81)996010408</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Antonio Carlos Reis de Souza */}
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-125 hover:-translate-y-2">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="/static/AntonioFarm.png" 
                      alt="Antonio Carlos Reis de Souza"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-ibm-plex font-bold text-2xl text-farm-dark">
                        <span className="text-[#1EC4BF] font-black">A</span>ntonio Carlos Reis de Souza
                      </h3>
                      <a 
                        href="https://www.linkedin.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#1EC4BF] transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                    <div className="font-ibm-plex text-sm text-gray-600 leading-relaxed space-y-1">
                      <ul className="list-disc pl-5 space-y-1 marker:text-gray-500">
                      <li>Engenheiro de Eletrônica, Especialista em Análise de Sistemas e Tecnologia Digital em
                          Controle e Proteção de Usinas e Subestações e Mestre em Economia Aplicada</li>
                      <li>Engenheiro da Companhia Hidroelétrica do São Francisco – Chesf, com atuação nas áreas
                          de automação de usinas e subestações</li>
                      <li>Superintendente de Tecnologia da Informação</li>
                      <li>Ouvidor da Chesf</li>
                      <li>Secretário Geral da Chesf</li>
                      <li>Presidente do Conselho Deliberativo da Fundação Chesf de Assistência e Seguridade – Fachesf</li>
                      <li>Membro do Conselho Fiscal da Energética Águas da Pedra S.A.</li>
                      <li>Professor do curso Técnico de Eletrônica e Telecomunicações do Instituto Federal de Pernambuco – IFPE</li>
                      <li>Presidente do Comitê de Cidadania dos Chesfianos de Recife</li>
                      <li>Contato: antoniocarlos@farmenergia.com.br (81)988814100</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Francisco Roberto Nunes de Souza */}
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-125 hover:-translate-y-2">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="/static/RobertoFarm.png" 
                      alt="Francisco Roberto Nunes de Souza"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-ibm-plex font-bold text-2xl text-farm-dark">
                        Francisco <span className="text-[#1EC4BF] font-black">R</span>oberto Nunes de Souza
                      </h3>
                      <a 
                        href="https://www.linkedin.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#1EC4BF] transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                    <div className="font-ibm-plex text-sm text-gray-600 leading-relaxed space-y-1">
                      <ul className="list-disc pl-5 space-y-1 marker:text-gray-500">
                      <li>Engenheiro Eletricista</li>
                      <li>Engenheiro da Chesf com atuação Técnica nas áreas de Operação, Manutenção, Estudos
                          e Comissionamento de Usinas de produção de energia elétrica</li>
                      <li>Gerente de Departamento de Logística, Transporte, Manutenção e Segurança Patrimonial</li>
                      <li>Gerente de Departamento coordenando atividades das áreas de Administração de
                          Recursos Humanos, Saúde e Segurança do Trabalho</li>
                      <li>Assessor da Superintendência de Recursos Humanos e da Superintendência de Projetos
                          e Construção da Geração</li>
                      <li>Assessor da Diretoria de Engenharia</li>
                      <li>Coordenador da Área de Gestão de Participações</li>
                      <li>Presidente do Conselho de Administração de 11 Empresas de Geração de Energia</li>
                      <li>Conselheiro de Administração de 14 Empresas de Geração e Transmissão de Energia,
                          dentre as quais, a Interligação Elétrica do Madeira S.A.</li>
                      <li>Profissional sênior de gestão de risco e compliance</li>
                      <li>Membro do Conselho Deliberativo da Fundação Chesf de Assistência e Seguridade Social – Fachesf</li>
                      <li>Contato: roberto@farmenergia.com.br (81)997216089</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maurício Carneiro Leão */}
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-125 hover:-translate-y-2">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="/static/MauricioFarm.png" 
                      alt="Maurício Carneiro Leão"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-ibm-plex font-bold text-2xl text-farm-dark">
                        <span className="text-[#1EC4BF] font-black">M</span>aurício Carneiro Leão
                      </h3>
                      <a 
                        href="https://www.linkedin.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#1EC4BF] transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                    <div className="font-ibm-plex text-sm text-gray-600 leading-relaxed space-y-1">
                      <ul className="list-disc pl-5 space-y-1 marker:text-gray-500">
                      <li>Engenheiro Civil e de Segurança do Trabalho</li>
                      <li>MBA de Finanças Corporativas</li>
                      <li>Environment, Social & Governance – ESG</li>
                      <li>Engenheiro da Companhia Hidroelétrica do São Francisco – Chesf, com atuação nas áreas
                          econômico-financeira, administrativa e de projetos e construção de transmissão</li>
                      <li>Chefe da Assessoria Técnica da Presidência da Companhia Energética de Pernambuco – CELPE</li>
                      <li>Gerente de Implantação de Trens Metropolitanos do Governo do Estado de PE</li>
                      <li>Presidente do Metrô do Recife e Membro Titular do Conselho Diretor da Associação
                          Nacional de Transportes Públicos e Presidente da Comissão Metro-Ferroviária do Brasil</li>
                      <li>Consultor Técnico da Bombardier</li>
                      <li>Diretor do Complexo Eólico Vamcruz</li>
                      <li>Membro Titular dos Conselhos Fiscal e de Administração do Complexo Eólico São Miguel 
                          do Gostoso e do Conselho Fiscal da Companhia Pernambucana de Gás - COPERGÁS</li>
                      <li>Membro Titular do Conselho de Administração do Porto do Recife</li>
                      <li>Contato: mauricio@farmenergia.com.br (81)999899892</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />

      {/* Dialog para detalhes do evento */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedEvento && (
            <>
              <DialogHeader>
                <DialogTitle className="font-ibm-plex text-2xl font-bold text-farm-dark">
                  {selectedEvento.titulo}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img 
                      src={selectedEvento.imagem} 
                      alt={selectedEvento.titulo}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <span className="text-farm-secondary font-ibm-plex font-semibold text-sm">
                        {selectedEvento.data}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-ibm-plex font-bold text-lg text-farm-dark mb-2">
                        Tópico
                      </h4>
                      <p className="font-ibm-plex text-gray-600 leading-relaxed">
                        {selectedEvento.descricao}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-ibm-plex font-bold text-lg text-farm-dark mb-4">
                    Detalhes
                  </h4>
                  <p className="font-ibm-plex text-gray-600 leading-relaxed text-justify">
                    {selectedEvento.descricaoCompleta}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SobreNos;