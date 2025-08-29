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
      titulo: "São Paulo - Sede Principal",
      data: "2018 - Presente",
      imagem: "/static/imagemReuniao.png",
      descricao: "Nossa sede principal localizada no coração financeiro do Brasil",
      descricaoCompleta: "Nossa sede principal está estrategicamente localizada no coração financeiro do Brasil, em São Paulo. Este escritório serve como centro de comando de todas as nossas operações, abrigando as equipes de liderança, desenvolvimento de projetos e relacionamento com clientes. Desde 2018, temos consolidado nossa presença na capital paulista, estabelecendo parcerias sólidas com instituições financeiras, empresas de energia e órgãos reguladores. O escritório conta com infraestrutura moderna e tecnológica para suportar nossos projetos de energia renovável em todo o território nacional."
    },
    {
      id: 2,
      titulo: "Rio de Janeiro - Filial",
      data: "2020 - Presente",
      imagem: "/static/FotoTeste2.png",
      descricao: "Expansão para atender projetos no estado do Rio de Janeiro",
      descricaoCompleta: "Nossa filial no Rio de Janeiro foi estabelecida em 2020 como parte da estratégia de expansão regional. Esta unidade é responsável por atender todo o estado do Rio de Janeiro e região, desenvolvendo projetos de energia renovável em parceria com empresas locais e o governo estadual. A equipe carioca foca especialmente em projetos de energia solar distribuída e pequenas centrais hidrelétricas, aproveitando as características geográficas favoráveis da região. O escritório também serve como ponte para projetos no Espírito Santo e sul da Bahia."
    },
    {
      id: 3,
      titulo: "Minas Gerais - Operações",
      data: "2021 - Presente",
      imagem: "/static/FotoTeste1.png",
      descricao: "Centro de operações para projetos de energia renovável",
      descricaoCompleta: "O centro de operações em Minas Gerais, inaugurado em 2021, representa um marco importante em nossa expansão. Esta unidade concentra as atividades operacionais de monitoramento e manutenção de usinas de energia renovável em funcionamento. Minas Gerais foi escolhida estrategicamente por sua posição central no país e pela abundância de recursos naturais favoráveis à geração de energia limpa. A equipe mineira é especializada em operação e manutenção de usinas solares, pequenas centrais hidrelétricas e projetos de biomassa, garantindo máxima eficiência e produtividade dos ativos energéticos."
    },
    {
      id: 4,
      titulo: "Bahia - Energia Solar",
      data: "2022 - Presente",
      imagem: "/static/7fd02d58-7605-49fa-9845-66c81b2c6cf9.png",
      descricao: "Especialização em projetos de energia solar fotovoltaica",
      descricaoCompleta: "Nossa unidade na Bahia, estabelecida em 2022, é especializada exclusivamente em projetos de energia solar fotovoltaica. A Bahia oferece condições excepcionais para geração solar, com altos índices de irradiação durante todo o ano. Nossa equipe baiana desenvolve desde grandes usinas solares até sistemas de geração distribuída para empresas e residências. Trabalhamos em estreita colaboração com fornecedores locais e internacionais de equipamentos fotovoltaicos, garantindo a melhor relação custo-benefício e tecnologia de ponta em todos os projetos. A unidade também atende os estados do Sergipe e parte de Pernambuco."
    },
    {
      id: 5,
      titulo: "Ceará - Energia Eólica",
      data: "2023 - Presente",
      imagem: "/static/FotoTeste2.png",
      descricao: "Foco em desenvolvimento de parques eólicos offshore e onshore",
      descricaoCompleta: "A unidade do Ceará, nossa mais recente expansão de 2023, concentra-se no desenvolvimento de parques eólicos tanto onshore quanto offshore. O Ceará é líder nacional em geração eólica, oferecendo ventos constantes e de alta qualidade. Nossa equipe cearense trabalha no desenvolvimento de complexos eólicos de grande porte, desde a prospecção de áreas até a operação comercial. Temos expertise em estudos anemométricos, modelagem de ventos e otimização de layout de parques. Também desenvolvemos projetos piloto de energia eólica offshore, uma tecnologia emergente no Brasil com enorme potencial de crescimento."
    },
    {
      id: 6,
      titulo: "Paraná - Biomassa",
      data: "2024 - Presente",
      imagem: "/static/imagemCentralHome.png",
      descricao: "Projetos inovadores de geração de energia a partir de biomassa",
      descricaoCompleta: "Nossa mais nova unidade, inaugurada em 2024 no Paraná, dedica-se ao desenvolvimento de projetos inovadores de geração de energia a partir de biomassa. O Paraná possui um forte setor agroindustrial, gerando abundantes resíduos que podem ser convertidos em energia limpa. Nossa equipe paranaense desenvolve projetos utilizando bagaço de cana, casca de arroz, resíduos florestais e outros materiais orgânicos. Trabalhamos com tecnologias avançadas de combustão, gasificação e biodigestão, sempre priorizando a sustentabilidade ambiental. Os projetos beneficiam tanto produtores rurais quanto indústrias, criando uma economia circular virtuosa."
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
                  É uma sociedade constituída por executivos sêniores, com larga experiência em
                  posições de liderança no planejamento e execução de estratégias vencedoras em
                  empresas de infraestrutura, com reconhecida habilidade no relacionamento e
                  negociação com Acionistas, Conselheiros, Executivos e Entidades Governamentais
                  e Privadas.
                </p>
              </div>
              
              {/* Nossa Trajetória - alinhado ao grid dos cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <h3 className="md:col-span-3 font-ibm-plex text-4xl font-bold text-farm-dark mb-8 text-left">
                  Nossa trajetória
                </h3>
                <div className="md:col-span-2">
                  <p className="font-ibm-plex text-lg text-gray-600 leading-relaxed mb-4 text-left">
                    Faucibus eget augue vitae justo rhoncus congue. Integer et mattis arcu rutus 
                    lobortis tincidunt. Morbi tristique, nulla ut auctor sollicitudin, ex justo 
                    lacinia magna, ut fermentum lorem tortor sed nisl.
                  </p>
                  <p className="font-ibm-plex text-lg text-gray-600 leading-relaxed text-left">
                    Suspendisse fermentum gravida. Curabitur et lorem vitae elit posuere 
                    sollicitudin. Proin nec sapien velit, porta tincidunt vectum, vel lobortis 
                    odio lacus.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/static/FotoTeste3.png" 
                    alt="Nossa trajetória" 
                    className="rounded-lg shadow-lg w-full max-w-md object-cover"
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
                            className="bg-white rounded-lg shadow-lg overflow-hidden h-full cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
                              <p className="font-ibm-plex text-farm-secondary text-xs mt-3 font-semibold">
                                Clique para ver mais detalhes
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
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
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
                        className="text-gray-600 hover:text-gray-800 transition-colors"
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
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
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
                        className="text-gray-600 hover:text-gray-800 transition-colors"
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
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
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
                        className="text-gray-600 hover:text-gray-800 transition-colors"
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
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
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
                        className="text-gray-600 hover:text-gray-800 transition-colors"
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
                        Resumo
                      </h4>
                      <p className="font-ibm-plex text-gray-600 leading-relaxed">
                        {selectedEvento.descricao}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-ibm-plex font-bold text-lg text-farm-dark mb-4">
                    Detalhes Completos
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