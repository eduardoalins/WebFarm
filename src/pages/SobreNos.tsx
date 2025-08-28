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
      descricao: "Desenvolver soluções inovadoras em energia renovável que transformem o futuro energético do Brasil de forma sustentável e eficiente."
    },
    {
      titulo: "Visão",
      icone: "/static/VisaoImagem.png",
      descricao: "Ser referência nacional em consultoria de energia renovável, liderando a transição energética brasileira."
    },
    {
      titulo: "Valores",
      icone: "/static/ValoresImagem.png",
      descricao: "Sustentabilidade, inovação, transparência e compromisso com o meio ambiente e com nossos clientes."
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
              {activeTab === 'empresa' ? 'Nossa Empresa' : 'Nossos Sócios'}
            </h1>
            <p className="font-ibm-plex text-xl text-white leading-relaxed">
              {activeTab === 'empresa' 
                ? 'Construindo o futuro da energia renovável no Brasil'
                : 'Conheça os profissionais que lideram nossa missão'
              }
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
                  É uma sociedade constituída por executivos sêniores, com larga experiência em posições de liderança no planejamento 
                  e execução de estratégias vencedoras na estrutura, na infraestrutura, na construção e na operação, com comprovada habilidade no relacionamento 
                  e negociação com Acionistas, Conselheiros, Executivos e Entidades Governamentais e Privadas.
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
                      src="/static/SociosImage.png" 
                      alt="Fábio Lopes Alves"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-ibm-plex font-bold text-2xl text-farm-dark">
                        <span className="font-black">F</span>ábio Lopes Alves
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
                      <p>• Engenheiro Eletricista pela UFRJ</p>
                      <p>• Executivo sênior no setor elétrico brasileiro - mais de 25 anos - com posições de liderança</p>
                      <p>• Ex-Diretor Presidente da Elektro</p>
                      <p>• Ex-Diretor da Área de Energia da Neoenergia</p>
                      <p>• Ex-Vice-Presidente da ABCE - Associação Brasileira de Companhias de Energia Elétrica</p>
                      <p>• Ex-Conselheiro da ABRADEE - Associação Brasileira de Distribuidoras de Energia Elétrica</p>
                      <p>• Ex-Coordenador do Grupo de Trabalho de Eficiência Energética da ABRADEE</p>
                      <p>• Ex-Presidente do Conselho de Administração da CEEE-D</p>
                      <p>• Ex-Presidente do Comitê de Regulação Econômica da ABCE</p>
                      <p>• Atualmente é consultor independente</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Antonio Carlos Reis da Souza */}
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="/static/SociosImage.png" 
                      alt="Antonio Carlos Reis da Souza"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-ibm-plex font-bold text-2xl text-farm-dark">
                        <span className="font-black">A</span>ntonio Carlos Reis da Souza
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
                      <p>• Engenheiro Civil pela Universidade Gama Filho/RJ</p>
                      <p>• Executivo sênior com mais de 35 anos de experiência no setor elétrico - Geração, Transmissão, Distribuição</p>
                      <p>• Ex-Diretor de Engenharia da Light S.A.</p>
                      <p>• Ex-Diretor de Expansão e Engenharia da CERJ - Companhia de Eletricidade do Rio de Janeiro</p>
                      <p>• Ex-Diretor de Engenharia e Construção da AMPLA</p>
                      <p>• Ex-Diretor de Engenharia da Neoenergia</p>
                      <p>• Ex-Diretor de Distribuição da Neoenergia</p>
                      <p>• Ex-Coordenador Regional Sudeste da ABCE</p>
                      <p>• Atualmente é consultor independente</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Francisco Roberto Ramos de Souza */}
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="/static/SociosImage.png" 
                      alt="Francisco Roberto Ramos de Souza"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-ibm-plex font-bold text-2xl text-farm-dark">
                        Francisco <span className="font-black">R</span>oberto Ramos de Souza
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
                      <p>• Bacharel em Economia</p>
                      <p>• Executivo sênior com mais de 35 anos de experiência no setor elétrico brasileiro - Geração, Transmissão, Distribuição, Comercialização</p>
                      <p>• Ex-Diretor de Mercado da ELETROBRÁS</p>
                      <p>• Ex-Diretor da FURNAS Centrais Elétricas S.A.</p>
                      <p>• Ex-Diretor da AMPLA</p>
                      <p>• Ex-Diretor de Negócios da Neoenergia</p>
                      <p>• Ex-Presidente da ABCE - Associação Brasileira de Companhias de Energia Elétrica</p>
                      <p>• Ex-Conselheiro da ONS - Operador Nacional do Sistema Elétrico</p>
                      <p>• Ex-Conselheiro da CCEE - Câmara de Comercialização de Energia Elétrica</p>
                      <p>• Atualmente é consultor independente</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maurício Carripeiro Labo */}
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="/static/SociosImage.png" 
                      alt="Maurício Carripeiro Labo"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-ibm-plex font-bold text-2xl text-farm-dark">
                        <span className="font-black">M</span>aurício Carripeiro Labo
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
                      <p>• Administrador de Empresas</p>
                      <p>• MBA em Finanças pela FGV</p>
                      <p>• Executivo sênior com mais de 25 anos de experiência no setor elétrico brasileiro</p>
                      <p>• Ex-Diretor Financeiro e de Relações com Investidores da CPFL Energia</p>
                      <p>• Ex-Diretor Financeiro da AMPLA</p>
                      <p>• Ex-Diretor Financeiro da Neoenergia</p>
                      <p>• Ex-Diretor Executivo da EDP Brasil</p>
                      <p>• Ex-Conselheiro da ABRADEE - Associação Brasileira de Distribuidoras de Energia Elétrica</p>
                      <p>• Ex-Coordenador do Grupo de Trabalho de Finanças da ABRADEE</p>
                      <p>• Atualmente é consultor independente</p>
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