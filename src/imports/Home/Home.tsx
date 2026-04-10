import svgPaths from "./svg-pie7oz5h7g";
import imgFrame785 from "./a6f03430dbc37aae891a1e68874c22404e7e88dc.png";
import imgPortfolioComercialPage00021 from "./9dc1c09a3a3b0258a6909572ec4a269f45f366c6.png";
import imgPortfolioComercialPage22 from "./5a8754f4e84862976cb27e2961a40c4c4ce9bdc1.png";
import imgImage2 from "./59188dce5269330aeab16bc4360e54f1fdfc0763.png";
import imgImage1 from "./a15dc7c9969b1ef579583178c01ddf2f900fccf8.png";
import imgHardCoverBook from "./5c3792fa6532e9b7e4bf3c6788dcbe28127c4643.png";
import imgProdutoThumb from "./b8b35f23c9d9396239cc2f6fe6318f129c32628e.png";
import imgImage6 from "./aebb509f77408db4cc09c92e955ff3e0c70ce122.png";
import imgImage4 from "./9b3c96f2b7312183db758a79fa35159baed1b966.png";
import InteractiveMetodo from "../../app/components/InteractiveMetodo";

function TituloSubtitulo() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-full" data-name="Titulo + subtitulo" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
      <p className="font-['Funnel_Display:SemiBold',sans-serif] leading-[0] relative shrink-0 text-[#1f2738] text-[56px] w-full">
        <span className="leading-[1.2]">{`Método e conhecimento em `}</span>
        <span className="leading-[1.2] text-[#6f4ae6]">Primeira Infância</span>
        <span className="leading-[1.2]">, para gestores que querem fazer diferença.</span>
      </p>
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] relative shrink-0 text-[#303d57] text-[18px] w-full">Palestras e oficinas para gestores públicos que querem transformar intenção em política pública real.</p>
    </div>
  );
}

function Frame31() {
  const handleMetodoClick = () => {
    document.getElementById('metodo-gilson')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
      <div className="bg-[#6f4ae6] content-stretch flex gap-[12px] h-[48px] items-center justify-center px-[24px] py-[8px] relative rounded-[999px] shrink-0 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#5d3ec7]" data-name="btn">
        <div aria-hidden="true" className="absolute border-2 border-[#6f4ae6] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <div className="flex flex-col font-['Funnel_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
          <p className="leading-[1.2]">Falar com Gilson</p>
        </div>
        <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-right text-white whitespace-nowrap">arrow-right</p>
      </div>
      <div onClick={handleMetodoClick} className="content-stretch flex gap-[12px] h-[48px] items-center justify-center px-[24px] py-[8px] relative rounded-[999px] shrink-0 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#ede8fc]" data-name="btn">
        <div aria-hidden="true" className="absolute border-2 border-[#6f4ae6] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <div className="flex flex-col font-['Funnel_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f4ae6] text-[18px] whitespace-nowrap">
          <p className="leading-[1.2]">Conhecer o Método</p>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[48px] items-start left-[240px] top-[calc(50%+0.5px)] w-[829px]">
      <TituloSubtitulo />
      <Frame31 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[30px] shrink-0 cursor-pointer transition-all duration-300 hover:bg-[#ede8fc]">
      <p className="font-['Funnel_Display:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#6f4ae6] text-[18px] text-right whitespace-nowrap">Início</p>
    </div>
  );
}

function Frame16() {
  const handleClick = () => {
    document.getElementById('sobre-mim')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div onClick={handleClick} className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[30px] shrink-0 cursor-pointer transition-all duration-300 hover:bg-[#ede8fc]">
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#6f4ae6] text-[18px] text-right whitespace-nowrap">Sobre mim</p>
    </div>
  );
}

function Frame17() {
  const handleClick = () => {
    document.getElementById('metodo-gilson')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div onClick={handleClick} className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[30px] shrink-0 cursor-pointer transition-all duration-300 hover:bg-[#ede8fc]">
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#6f4ae6] text-[18px] text-right whitespace-nowrap">Método Gilson</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[30px] shrink-0 cursor-pointer transition-all duration-300 hover:bg-[#ede8fc]">
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#6f4ae6] text-[18px] text-right whitespace-nowrap">Produtos</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[30px] shrink-0 cursor-pointer transition-all duration-300 hover:bg-[#ede8fc]">
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#6f4ae6] text-[18px] text-right whitespace-nowrap">PAEPI 100</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[30px] shrink-0 cursor-pointer transition-all duration-300 hover:bg-[#ede8fc]">
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#6f4ae6] text-[18px] text-right whitespace-nowrap">Blog</p>
    </div>
  );
}

function Opcoes() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end overflow-clip relative shrink-0" data-name="Opções" data-aos="fade-down" data-aos-duration="600" data-aos-delay="100">
      <Frame8 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <div className="bg-[#6f4ae6] content-stretch flex gap-[12px] h-[48px] items-center justify-center px-[24px] py-[8px] relative rounded-[999px] shrink-0 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#5d3ec7]" data-name="btn">
        <div aria-hidden="true" className="absolute border-2 border-[#6f4ae6] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <div className="flex flex-col font-['Funnel_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
          <p className="leading-[1.2]">Falar com Gilson</p>
        </div>
        <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-right text-white whitespace-nowrap">arrow-right</p>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-1/2 px-[240px] py-[24px] top-0 w-[1920px]" data-name="MENU">
      <p className="font-['Poppins:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#1f2738] text-[24px] w-[226px]" data-aos="fade-down" data-aos-duration="600">Gilson Araújo</p>
      <Opcoes />
    </div>
  );
}

function Frame29() {
  return (
    <div className="h-[894px] overflow-clip relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#f8f5ef] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[17.24%] max-w-none top-[-0.05%] w-[82.78%]" src={imgFrame785} />
        </div>
      </div>
      <Frame30 />
      <Menu />
    </div>
  );
}

function CredDot() {
  return <div className="bg-[#6f4ae6] rounded-[4px] shrink-0 size-[8px]" data-name="cred-dot" />;
}

function CredItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[528px]" data-name="cred-item">
      <CredDot />
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#303d57] text-[16px] whitespace-nowrap">{` Doutor em Políticas Públicas`}</p>
    </div>
  );
}

function CredDot1() {
  return <div className="bg-[#ff791b] rounded-[4px] shrink-0 size-[8px]" data-name="cred-dot" />;
}

function CredItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[528px]" data-name="cred-item">
      <CredDot1 />
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#303d57] text-[16px] whitespace-nowrap">{` Pós-doutorando FGV · Pesquisador USP`}</p>
    </div>
  );
}

function CredDot2() {
  return <div className="bg-[#31bf71] rounded-[4px] shrink-0 size-[8px]" data-name="cred-dot" />;
}

function CredItem2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[528px]" data-name="cred-item">
      <CredDot2 />
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#303d57] text-[16px] whitespace-nowrap">{` Comitê Técnico 1ª Infância — Instituto Rui Barbosa`}</p>
    </div>
  );
}

function CredDot3() {
  return <div className="bg-[#2ea6ff] rounded-[4px] shrink-0 size-[8px]" data-name="cred-dot" />;
}

function CredItem3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[528px]" data-name="cred-item">
      <CredDot3 />
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#303d57] text-[16px] whitespace-nowrap">{` Auditor de controle externo`}</p>
    </div>
  );
}

function CredDot4() {
  return <div className="bg-[#d62a70] rounded-[4px] shrink-0 size-[8px]" data-name="cred-dot" />;
}

function CredItem4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[528px]" data-name="cred-item">
      <CredDot4 />
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#303d57] text-[16px] whitespace-nowrap">{` Palestrante nacional`}</p>
    </div>
  );
}

function Credenciais() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="credenciais">
      <CredItem />
      <CredItem1 />
      <CredItem2 />
      <CredItem3 />
      <CredItem4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Funnel_Display:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1f2738] text-[40px] w-full">Quem é Gilson Araújo?</p>
      <div className="font-['Funnel_Sans:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#303d57] text-[18px] w-full">
        <p className="leading-[1.4] mb-[8px]">Doutor em Políticas Públicas, pós-doutorando pela FGV e pesquisador associado à USP.</p>
        <p className="leading-[1.4] mb-[8px]">Gilson integrou o Comitê Técnico da Primeira Infância do Instituto Rui Barbosa, coordenou auditorias governamentais de alcance nacional e acompanhou diretamente municípios na construção de suas políticas para a Primeira Infância.</p>
        <p className="leading-[1.4]">Fundador do Centro Gilson Araújo, hoje forma gestores e articula redes municipais em todo o Brasil.</p>
      </div>
      <Credenciais />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start justify-center min-h-px min-w-px relative" data-aos="fade-right">
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#6f4ae6] text-[16px] w-[min-content]">SOBRE MIM</p>
      <Frame />
      <div className="bg-[#6f4ae6] content-stretch flex gap-[12px] h-[48px] items-center justify-center px-[24px] py-[8px] relative rounded-[999px] shrink-0 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#5d3ec7]" data-name="btn">
        <div aria-hidden="true" className="absolute border-2 border-[#6f4ae6] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <div className="flex flex-col font-['Funnel_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
          <p className="leading-[1.2]">Falar no Whatsapp</p>
        </div>
        <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-right text-white whitespace-nowrap">arrow-right</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div id="sobre-mim" className="content-stretch flex gap-[96px] items-center px-[240px] py-[100px] relative w-full">
          <div className="h-[698.863px] relative rounded-[44px] shrink-0 w-[626.088px]" data-name="Portfólio Comercial_page-0002 1" data-aos="zoom-in">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[44px]">
              <div className="absolute bg-white inset-0 rounded-[44px]" />
              <div className="absolute inset-0 overflow-hidden rounded-[44px]">
                <img alt="" className="absolute h-[112.01%] left-0 max-w-none top-0 w-full" src={imgPortfolioComercialPage00021} />
              </div>
              <img alt="" className="absolute max-w-none object-cover rounded-[44px] size-full" src={imgPortfolioComercialPage22} />
            </div>
          </div>
          <Frame47 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[1.4] not-italic relative shrink-0 w-full" data-name="Frame" data-aos="fade-up">
      <p className="font-['Funnel_Sans:Medium',sans-serif] relative shrink-0 text-[#6f4ae6] text-[16px] whitespace-nowrap">PRODUTOS EM DESTAQUE</p>
      <p className="font-['Funnel_Display:Bold',sans-serif] min-w-full relative shrink-0 text-[#1f2738] text-[40px] text-center w-[min-content]">Para gestores públicos que querem governar a Primeira Infância com método e responsabilidade</p>
    </div>
  );
}

function CredDot5() {
  return <div className="bg-[#6f4ae6] rounded-[4px] shrink-0 size-[8px]" data-name="cred-dot" />;
}

function CredItem5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="cred-item">
      <CredDot5 />
      <p className="flex-[1_0_0] font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#626f8a] text-[14px]">Formato: Online ou presencial.</p>
    </div>
  );
}

function CredDot6() {
  return <div className="bg-[#ff791b] rounded-[4px] shrink-0 size-[8px]" data-name="cred-dot" />;
}

function CredItem6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="cred-item">
      <CredDot6 />
      <p className="flex-[1_0_0] font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#626f8a] text-[14px]">Duração: Até 2h.</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <CredItem5 />
      <CredItem6 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[207px] items-start relative shrink-0 w-full">
      <p className="font-['Funnel_Display:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1c1c1e] text-[18px] w-full">Governança Colaborativa, Intersetorialidade e Primeira Infância</p>
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#626f8a] text-[14px] w-full">Tem como objetivo sensibilizar e alinhar gestores e profissionais quanto à importância da atuação integrada para a promoção do desenvolvimento infantil.</p>
      <Frame21 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative">
      <p className="font-['Funnel_Display:Bold',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1c1c1e] text-[32px] w-[min-content]">Palestra</p>
      <Frame34 />
      <div className="bg-[#6f4ae6] content-stretch flex gap-[12px] h-[48px] items-center justify-center px-[24px] py-[8px] relative rounded-[999px] shrink-0 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#5d3ec7]" data-name="btn">
        <div aria-hidden="true" className="absolute border-2 border-[#6f4ae6] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <div className="flex flex-col font-['Funnel_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
          <p className="leading-[1.2]">Contratar</p>
        </div>
      </div>
    </div>
  );
}

function ProdutoCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[44px]" data-name="produto-card" data-aos="fade-up" data-aos-delay="100">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] py-[48px] relative w-full">
          <Frame39 />
          <div className="h-[215px] relative shrink-0 w-[244.886px]" data-name="image 2" data-aos="zoom-in">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[100.17%]" src={imgImage2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CredDot7() {
  return <div className="bg-[#6f4ae6] rounded-[4px] shrink-0 size-[8px]" data-name="cred-dot" />;
}

function CredItem7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="cred-item">
      <CredDot7 />
      <p className="flex-[1_0_0] font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#626f8a] text-[14px]">Formato: Presencial.</p>
    </div>
  );
}

function CredDot8() {
  return <div className="bg-[#ff791b] rounded-[4px] shrink-0 size-[8px]" data-name="cred-dot" />;
}

function CredItem8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="cred-item">
      <CredDot8 />
      <p className="flex-[1_0_0] font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#626f8a] text-[14px]">Duração: 6h.</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <CredItem7 />
      <CredItem8 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="font-['Funnel_Display:SemiBold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#1c1c1e] text-[18px] w-full">
        <p className="leading-[1.4] mb-0">Intersetorial com Metodologia</p>
        <p className="leading-[1.4] mb-0">de Casos (Aplicação prática do PAEPI</p>
        <p className="leading-[1.4]">e do Método GILSON)</p>
      </div>
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#626f8a] text-[14px] w-full">Tem como objetivo fortalecer capacidades locais para identificar problemas complexos, produzir diagnósticos integrados e estruturar respostas concretas no âmbito municipal.</p>
      <Frame22 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative">
      <p className="font-['Funnel_Display:Bold',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1c1c1e] text-[32px] w-[min-content]">Oficina</p>
      <Frame35 />
      <div className="bg-[#6f4ae6] content-stretch flex gap-[12px] h-[48px] items-center justify-center px-[24px] py-[8px] relative rounded-[999px] shrink-0 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#5d3ec7]" data-name="btn">
        <div aria-hidden="true" className="absolute border-2 border-[#6f4ae6] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <div className="flex flex-col font-['Funnel_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
          <p className="leading-[1.2]">Contratar</p>
        </div>
      </div>
    </div>
  );
}

function ProdutoCard1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[44px]" data-name="produto-card" data-aos="fade-up" data-aos-delay="200">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] py-[48px] relative w-full">
          <Frame40 />
          <div className="relative shrink-0 size-[215px]" data-name="image 1" data-aos="zoom-in">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProdutosGrid() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="produtos-grid">
      <ProdutoCard />
      <ProdutoCard1 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[#f7f6f2] relative shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[240px] py-[100px] relative w-full">
          <Frame1 />
          <ProdutosGrid />
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-center w-full" data-aos="fade-up">
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] relative shrink-0 text-[#6f4ae6] text-[16px] w-full">MÉTODO GILSON</p>
      <div className="font-['Funnel_Display:Bold',sans-serif] leading-[0] relative shrink-0 text-[#1f2738] text-[40px] w-full">
        <p className="leading-[1.4] mb-0">6 passos. 100 dias.</p>
        <p className="leading-[1.4]">Uma política que funciona.</p>
      </div>
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] relative shrink-0 text-[#303d57] text-[18px] w-full">O Método GILSON é uma abordagem prática para organizar a gestão municipal da Primeira Infância com metas claras, ações integradas e resultados mensuráveis.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[758px]" data-name="Frame">
      <Frame36 />
    </div>
  );
}

function Gilson() {
  return (
    <div className="h-[114.563px] relative shrink-0 w-[610.631px]" data-name="GILSON" data-aos="zoom-in">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 610.631 114.563">
        <g id="GILSON">
          <path d={svgPaths.p3ade0880} fill="var(--fill-0, #FFD23C)" id="Vector" />
          <path d={svgPaths.p38006500} fill="var(--fill-0, #D62A70)" id="Vector_2" />
          <path d={svgPaths.pdd05500} fill="var(--fill-0, #2EA6FF)" id="Vector_3" />
          <path d={svgPaths.p21331a00} fill="var(--fill-0, #31BF71)" id="Vector_4" />
          <path d={svgPaths.p3b2daf00} fill="var(--fill-0, #FF791B)" id="Vector_5" />
          <path d={svgPaths.p281dc880} fill="var(--fill-0, #6F4AE6)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function MetodoPrazo() {
  return (
    <div className="bg-[#6f4ae6] content-stretch flex items-center px-[14px] py-[4px] relative rounded-[999px] shrink-0" data-name="metodo-prazo">
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Passo 1</p>
    </div>
  );
}

function MetodoCard() {
  return (
    <div className="bg-[#ede8fc] col-1 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="metodo-card" data-aos="fade-up" data-aos-delay="100">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] py-[24px] relative w-full">
          <MetodoPrazo />
          <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1f2738] text-[18px] w-[min-content]">Governar com liderança</p>
          <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#303d57] text-[16px] w-[min-content]">Até o 15º dia</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eef1f7] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function MetodoPrazo1() {
  return (
    <div className="bg-[#ff791b] content-stretch flex items-center px-[14px] py-[4px] relative rounded-[999px] shrink-0" data-name="metodo-prazo">
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Passo 2</p>
    </div>
  );
}

function MetodoCard1() {
  return (
    <div className="bg-[#fff0e5] col-2 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="metodo-card" data-aos="fade-up" data-aos-delay="200">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] py-[24px] relative w-full">
          <MetodoPrazo1 />
          <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1f2738] text-[18px] w-[min-content]">Integrar o que já existe</p>
          <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#303d57] text-[16px] w-[min-content]">Até o 25º dia</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eef1f7] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function MetodoPrazo2() {
  return (
    <div className="bg-[#31bf71] content-stretch flex items-center px-[14px] py-[4px] relative rounded-[999px] shrink-0" data-name="metodo-prazo">
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Passo 3</p>
    </div>
  );
}

function MetodoCard2() {
  return (
    <div className="bg-[#eafaf1] col-3 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="metodo-card" data-aos="fade-up" data-aos-delay="300">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] py-[24px] relative w-full">
          <MetodoPrazo2 />
          <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1f2738] text-[18px] w-[min-content]">Levantar dados básicos</p>
          <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#303d57] text-[16px] w-[min-content]">Até o 35º dia</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eef1f7] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function MetodoPrazo3() {
  return (
    <div className="bg-[#2ea6ff] content-stretch flex items-center px-[14px] py-[4px] relative rounded-[999px] shrink-0" data-name="metodo-prazo">
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Passo 4</p>
    </div>
  );
}

function MetodoCard3() {
  return (
    <div className="bg-[#e5f4ff] col-1 justify-self-stretch relative rounded-[16px] row-2 self-start shrink-0" data-name="metodo-card" data-aos="fade-up" data-aos-delay="100">
      <div aria-hidden="true" className="absolute border-[#eef1f7] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] py-[24px] relative w-full">
        <MetodoPrazo3 />
        <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1f2738] text-[18px] w-[min-content]">Sistematizar o plano</p>
        <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#303d57] text-[14px] w-[min-content]">Até o 60º dia</p>
      </div>
    </div>
  );
}

function MetodoPrazo4() {
  return (
    <div className="bg-[#d62a70] content-stretch flex items-center px-[14px] py-[4px] relative rounded-[999px] shrink-0" data-name="metodo-prazo">
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Passo 5</p>
    </div>
  );
}

function MetodoCard4() {
  return (
    <div className="bg-[#fbe9f0] col-2 justify-self-stretch relative rounded-[16px] row-2 self-start shrink-0" data-name="metodo-card" data-aos="fade-up" data-aos-delay="200">
      <div aria-hidden="true" className="absolute border-[#eef1f7] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] py-[24px] relative w-full">
        <MetodoPrazo4 />
        <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1f2738] text-[18px] w-[min-content]">Orçar as ações</p>
        <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#303d57] text-[14px] w-[min-content]">Até o 75º dia</p>
      </div>
    </div>
  );
}

function MetodoPrazo5() {
  return (
    <div className="bg-[#ffd23c] content-stretch flex items-center px-[14px] py-[4px] relative rounded-[999px] shrink-0" data-name="metodo-prazo">
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Passo 6</p>
    </div>
  );
}

function MetodoCard5() {
  return (
    <div className="bg-[#fff9e5] col-3 justify-self-stretch relative rounded-[16px] row-2 self-start shrink-0" data-name="metodo-card" data-aos="fade-up" data-aos-delay="300">
      <div aria-hidden="true" className="absolute border-[#eef1f7] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] py-[24px] relative w-full">
        <MetodoPrazo5 />
        <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1f2738] text-[18px] w-[min-content]">Núcleo de monitoramento</p>
        <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#303d57] text-[14px] w-[min-content]">Até o 100º dia</p>
      </div>
    </div>
  );
}

function MetodoGrid() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full" data-name="metodo-grid">
      <MetodoCard />
      <MetodoCard1 />
      <MetodoCard2 />
      <MetodoCard3 />
      <MetodoCard4 />
      <MetodoCard5 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[72px] items-center relative shrink-0 w-full">
      <Gilson />
      <MetodoGrid />
    </div>
  );
}

function Frame49() {
  return (
    <div id="metodo-gilson" className="bg-white content-stretch flex flex-col gap-[40px] items-center overflow-clip px-[240px] py-[100px] relative shrink-0 w-[1920px]">
      <Frame2 />
      <InteractiveMetodo />
      <div className="bg-[#6f4ae6] content-stretch flex gap-[12px] h-[48px] items-center justify-center px-[24px] py-[8px] relative rounded-[999px] shrink-0 w-[250px] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#5d3ec7]" data-name="btn">
        <div aria-hidden="true" className="absolute border-2 border-[#6f4ae6] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <div className="flex flex-col font-['Funnel_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
          <p className="leading-[1.2]">Ver mais no Ebook</p>
        </div>
        <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-right text-white whitespace-nowrap">arrow-right</p>
      </div>
    </div>
  );
}

function AvatarImage() {
  return <div className="bg-[#d62a70] opacity-25 shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] size-[111.76px]" data-name="Avatar / Image-32" />;
}

function CredDot9() {
  return <div className="bg-[#d62a70] rounded-[4px] shrink-0 size-[8px]" data-name="cred-dot" />;
}

function CredItem9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[528px]" data-name="cred-item">
      <CredDot9 />
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Os 6 passos do Método GILSON aplicados ao PAEPI</p>
    </div>
  );
}

function CredDot10() {
  return <div className="bg-[#ff791b] rounded-[4px] shrink-0 size-[8px]" data-name="cred-dot" />;
}

function CredItem10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[528px]" data-name="cred-item">
      <CredDot10 />
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Minuta de decreto municipal pronta para usar</p>
    </div>
  );
}

function CredDot11() {
  return <div className="bg-[#31bf71] rounded-[4px] shrink-0 size-[8px]" data-name="cred-dot" />;
}

function CredItem11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[528px]" data-name="cred-item">
      <CredDot11 />
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Painel com 10 indicadores-chave</p>
    </div>
  );
}

function CredDot12() {
  return <div className="bg-[#2ea6ff] rounded-[4px] shrink-0 size-[8px]" data-name="cred-dot" />;
}

function CredItem12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[528px]" data-name="cred-item">
      <CredDot12 />
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Modelo de quadro de ação intersetorial</p>
    </div>
  );
}

function Credenciais1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="credenciais">
      <CredItem9 />
      <CredItem10 />
      <CredItem11 />
      <CredItem12 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="font-['Funnel_Display:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-white w-full">
        <p className="leading-[1.4] mb-0 text-[40px]">Baixe gratuitamente</p>
        <p className="text-[40px]">
          <span className="leading-[1.4]">{`o ebook `}</span>
          <span className="font-['Funnel_Display:Bold',sans-serif] leading-[1.4] not-italic text-white">PAEPI 100</span>
        </p>
      </div>
      <div className="font-['Funnel_Sans:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[1.4] mb-[8px]">Um guia prático para organizar a política da Primeira Infância em até 100 dias, do diagnóstico ao monitoramento.</p>
        <p className="leading-[1.4]">O que você vai encontrar:</p>
      </div>
      <Credenciais1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Frame" data-aos="fade-left">
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#e5b100] text-[16px] w-[min-content]">Ebook PAEPI 100</p>
      <Frame38 />
      <div className="bg-white content-stretch flex gap-[12px] h-[48px] items-center justify-center px-[24px] py-[8px] relative rounded-[999px] shrink-0 w-[250px] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-50" data-name="btn">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
        <div className="flex flex-col font-['Funnel_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0075cc] text-[18px] whitespace-nowrap">
          <p className="leading-[1.2]">Baixar ebook</p>
        </div>
        <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0075cc] text-[14px] text-right whitespace-nowrap">download</p>
      </div>
    </div>
  );
}

function AvatarImage1() {
  return (
    <div className="bg-[#d62a70] content-stretch flex flex-col items-center justify-center overflow-clip py-[14px] relative shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] size-[80px]" data-name="Avatar / Image-32">
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[40px] text-white whitespace-nowrap">DOWNLOAD</p>
    </div>
  );
}

function AvatarImage2() {
  return <div className="bg-[#ede8fc] opacity-50 shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] size-[207.299px]" data-name="Avatar / Image-32" />;
}

function AvatarImage3() {
  return <div className="bg-[#2ea6ff] opacity-50 shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] size-[80px]" data-name="Avatar / Image-32" />;
}

function AvatarImage4() {
  return <div className="bg-[#31bf71] opacity-50 shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] size-[205.775px]" data-name="Avatar / Image-32" />;
}

function AvatarImage5() {
  return <div className="bg-[#ffd23c] opacity-50 shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] size-[120px]" data-name="Avatar / Image-32" />;
}

function Frame37() {
  return (
    <div className="bg-[#6f4ae6] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[150px] items-center px-[240px] py-[80px] relative w-full">
          <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%+43.76px)] size-[145.513px] top-[316.57px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[67.98deg]">
              <AvatarImage />
            </div>
          </div>
          <Frame3 />
          <div className="h-[480px] relative rounded-[24px] shrink-0 w-[566.404px]" data-name="Hard Cover Book" data-aos="zoom-in">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
              <img alt="" className="absolute h-[112.45%] left-0 max-w-none top-[-7.9%] w-full" src={imgHardCoverBook} />
            </div>
          </div>
          <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%+714.98px)] size-[97.96px] top-[39.57px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
            <div className="flex-none rotate-[14.98deg]">
              <AvatarImage1 />
            </div>
          </div>
          <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%+922.95px)] size-[269.907px] top-[480.36px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[67.98deg]">
              <AvatarImage2 />
            </div>
          </div>
          <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%+835.4px)] size-[110.796px] top-[-43.43px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[123.32deg]">
              <AvatarImage3 />
            </div>
          </div>
          <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%-944.73px)] size-[232.544px] top-[290.57px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[98.04deg]">
              <AvatarImage4 />
            </div>
          </div>
          <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%-827.55px)] size-[132.907px] top-[-53.43px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[-6.55deg]">
              <AvatarImage5 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[1.4] not-italic relative shrink-0 text-center w-full">
      <p className="font-['Funnel_Sans:Medium',sans-serif] relative shrink-0 text-[#6f4ae6] text-[16px] w-full">DEPOIMENTOS</p>
      <p className="font-['Funnel_Display:Bold',sans-serif] relative shrink-0 text-[#1f2738] text-[40px] w-full">Gestores que colocaram a Primeira Infância em prática</p>
      <p className="font-['Funnel_Sans:Medium',sans-serif] relative shrink-0 text-[#303d57] text-[18px] w-full">De todo o Brasil, gestores que participaram da Oficina PAEPI e transformaram intenção em política pública real.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1440px]" data-name="Frame" data-aos="fade-up">
      <Frame41 />
    </div>
  );
}

function DepoAvatar() {
  return (
    <div className="bg-[#6f4ae6] relative rounded-[18px] shrink-0 size-[36px]" data-name="depo-avatar">
      <p className="absolute font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] left-[calc(50%-10px)] not-italic text-[14px] text-white top-[calc(50%-9.8px)] whitespace-nowrap">MF</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Funnel_Sans:Medium',sans-serif] gap-[4px] items-start leading-[1.4] min-h-px min-w-px not-italic relative text-[#626f8a] text-[14px]" data-name="Frame">
      <p className="relative shrink-0 w-full">Maria Fernanda</p>
      <p className="relative shrink-0 w-full">Secretário(a) de [Pasta] · [Município] — [Estado]</p>
    </div>
  );
}

function DepoAuthor() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="depo-author">
      <DepoAvatar />
      <Frame5 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#6b46f0] text-[28px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`"`}</p>
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1f2738] text-[14px] w-[min-content]">Participar da oficina foi um divisor de águas para nossa gestão. Saímos com um plano real, com metas, responsáveis e orçamento definidos.</p>
      <DepoAuthor />
    </div>
  );
}

function ProdutoCard2() {
  return (
    <div className="bg-[#f7f6f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="produto-card" data-aos="fade-up" data-aos-delay="100">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <Frame42 />
        </div>
      </div>
    </div>
  );
}

function DepoAvatar1() {
  return (
    <div className="bg-[#ff791b] relative rounded-[18px] shrink-0 size-[36px]" data-name="depo-avatar">
      <p className="absolute font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] left-[calc(50%-10px)] not-italic text-[14px] text-white top-[calc(50%-9.8px)] whitespace-nowrap">CS</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Funnel_Sans:Medium',sans-serif] gap-[4px] items-start leading-[1.4] min-h-px min-w-px not-italic relative text-[#626f8a] text-[14px]" data-name="Frame">
      <p className="relative shrink-0 w-full">Carlos Souza</p>
      <p className="relative shrink-0 w-full">Secretário(a) de [Pasta] · [Município] — [Estado]</p>
    </div>
  );
}

function DepoAuthor1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="depo-author">
      <DepoAvatar1 />
      <Frame6 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#ff791b] text-[28px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`"`}</p>
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1f2738] text-[14px] w-[min-content]">Participar da oficina foi um divisor de águas para nossa gestão. Saímos com um plano real, com metas, responsáveis e orçamento definidos.</p>
      <DepoAuthor1 />
    </div>
  );
}

function ProdutoCard3() {
  return (
    <div className="bg-[#f7f6f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="produto-card" data-aos="fade-up" data-aos-delay="200">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <Frame43 />
        </div>
      </div>
    </div>
  );
}

function DepoAvatar2() {
  return (
    <div className="bg-[#31bf71] relative rounded-[18px] shrink-0 size-[36px]" data-name="depo-avatar">
      <p className="absolute font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] left-[calc(50%-10px)] not-italic text-[14px] text-white top-[calc(50%-9.8px)] whitespace-nowrap">AP</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Funnel_Sans:Medium',sans-serif] gap-[4px] items-start leading-[1.4] min-h-px min-w-px not-italic relative text-[#626f8a] text-[14px]" data-name="Frame">
      <p className="relative shrink-0 w-full">Ana Paula Ribeiro</p>
      <p className="relative shrink-0 w-full">Secretário(a) de [Pasta] · [Município] — [Estado]</p>
    </div>
  );
}

function DepoAuthor2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="depo-author">
      <DepoAvatar2 />
      <Frame7 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#31bf71] text-[28px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`"`}</p>
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1f2738] text-[14px] w-[min-content]">Participar da oficina foi um divisor de águas para nossa gestão. Saímos com um plano real, com metas, responsáveis e orçamento definidos.</p>
      <DepoAuthor2 />
    </div>
  );
}

function ProdutoCard4() {
  return (
    <div className="bg-[#f7f6f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="produto-card" data-aos="fade-up" data-aos-delay="300">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <Frame44 />
        </div>
      </div>
    </div>
  );
}

function DepoAvatar3() {
  return (
    <div className="bg-[#2ea6ff] relative rounded-[18px] shrink-0 size-[36px]" data-name="depo-avatar">
      <p className="absolute font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] left-[calc(50%-10px)] not-italic text-[14px] text-white top-[calc(50%-9.8px)] whitespace-nowrap">AP</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Funnel_Sans:Medium',sans-serif] gap-[4px] items-start leading-[1.4] min-h-px min-w-px not-italic relative text-[#626f8a] text-[14px]" data-name="Frame">
      <p className="relative shrink-0 w-full">Ana Paula Ribeiro</p>
      <p className="relative shrink-0 w-full">Secretário(a) de [Pasta] · [Município] — [Estado]</p>
    </div>
  );
}

function DepoAuthor3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="depo-author">
      <DepoAvatar3 />
      <Frame9 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#2ea6ff] text-[28px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`"`}</p>
      <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1f2738] text-[14px] w-[min-content]">Participar da oficina foi um divisor de águas para nossa gestão. Saímos com um plano real, com metas, responsáveis e orçamento definidos.</p>
      <DepoAuthor3 />
    </div>
  );
}

function ProdutoCard5() {
  return (
    <div className="bg-[#f7f6f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="produto-card" data-aos="fade-up" data-aos-delay="100">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <Frame46 />
        </div>
      </div>
    </div>
  );
}

function ProdutosGrid1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="produtos-grid">
      <ProdutoCard2 />
      <ProdutoCard3 />
      <ProdutoCard4 />
      <ProdutoCard5 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[240px] py-[100px] relative w-full">
          <Frame4 />
          <ProdutosGrid1 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[1.4] not-italic relative shrink-0 text-center w-full" data-name="Frame" data-aos="fade-up">
      <p className="font-['Funnel_Sans:Medium',sans-serif] relative shrink-0 text-[#6f4ae6] text-[16px] w-full">BLOG</p>
      <p className="font-['Funnel_Display:Bold',sans-serif] relative shrink-0 text-[#1f2738] text-[40px] w-full">Conhecimento que vira política pública</p>
    </div>
  );
}

function ProdutoThumb() {
  return (
    <div className="h-[216px] relative shrink-0 w-full" data-name="produto-thumb">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProdutoThumb} />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Funnel_Display:SemiBold',sans-serif] min-w-full relative shrink-0 text-[#1c1c1e] text-[20px] w-[min-content]">Intersetorialidade na prática: por que integrar é mais difícil do que parece e como resolver isso...</p>
      <p className="font-['Funnel_Sans:Medium',sans-serif] relative shrink-0 text-[#626f8a] text-[14px] whitespace-nowrap">Gilson Araújo · 12 mar 2026 · 8 min</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[1.2] relative shrink-0 text-[#6f4ae6] w-full whitespace-nowrap">
      <p className="font-['Funnel_Sans:Medium',sans-serif] relative shrink-0 text-[18px]">Ler mais</p>
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] relative shrink-0 text-[11px]">chevron-right</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start not-italic p-[32px] relative w-full">
        <Frame52 />
        <Frame53 />
      </div>
    </div>
  );
}

function ProdutoCard6() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[44px] cursor-pointer transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] outline outline-0 outline-[#6f4ae6] hover:outline-2" data-name="produto-card" data-aos="fade-up" data-aos-delay="100">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <ProdutoThumb />
        <Frame51 />
      </div>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[44px]" />
    </div>
  );
}

function ProdutoThumb1() {
  return (
    <div className="h-[216px] relative shrink-0 w-full" data-name="produto-thumb">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProdutoThumb} />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Funnel_Display:SemiBold',sans-serif] min-w-full relative shrink-0 text-[#1c1c1e] text-[20px] w-[min-content]">Intersetorialidade na prática: por que integrar é mais difícil do que parece e como resolver isso...</p>
      <p className="font-['Funnel_Sans:Medium',sans-serif] relative shrink-0 text-[#626f8a] text-[14px] whitespace-nowrap">Gilson Araújo · 12 mar 2026 · 8 min</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[1.2] relative shrink-0 text-[#6f4ae6] w-full whitespace-nowrap">
      <p className="font-['Funnel_Sans:Medium',sans-serif] relative shrink-0 text-[18px]">Ler mais</p>
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] relative shrink-0 text-[11px]">chevron-right</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start not-italic p-[32px] relative w-full">
        <Frame55 />
        <Frame56 />
      </div>
    </div>
  );
}

function ProdutoCard7() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[44px] cursor-pointer transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] outline outline-0 outline-[#6f4ae6] hover:outline-2" data-name="produto-card" data-aos="fade-up" data-aos-delay="200">
      <ProdutoThumb1 />
      <Frame54 />
    </div>
  );
}

function ProdutoThumb2() {
  return (
    <div className="h-[216px] relative shrink-0 w-full" data-name="produto-thumb">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProdutoThumb} />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Funnel_Display:SemiBold',sans-serif] min-w-full relative shrink-0 text-[#1c1c1e] text-[20px] w-[min-content]">Intersetorialidade na prática: por que integrar é mais difícil do que parece e como resolver isso...</p>
      <p className="font-['Funnel_Sans:Medium',sans-serif] relative shrink-0 text-[#626f8a] text-[14px] whitespace-nowrap">Gilson Araújo · 12 mar 2026 · 8 min</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[1.2] relative shrink-0 text-[#6f4ae6] w-full whitespace-nowrap">
      <p className="font-['Funnel_Sans:Medium',sans-serif] relative shrink-0 text-[18px]">Ler mais</p>
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] relative shrink-0 text-[11px]">chevron-right</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start not-italic p-[32px] relative w-full">
        <Frame58 />
        <Frame59 />
      </div>
    </div>
  );
}

function ProdutoCard8() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[44px] cursor-pointer transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] outline outline-0 outline-[#6f4ae6] hover:outline-2" data-name="produto-card" data-aos="fade-up" data-aos-delay="300">
      <ProdutoThumb2 />
      <Frame57 />
    </div>
  );
}

function ProdutosGrid2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="produtos-grid">
      <ProdutoCard6 />
      <ProdutoCard7 />
      <ProdutoCard8 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[240px] py-[100px] relative w-full">
          <Frame10 />
          <ProdutosGrid2 />
          <div className="bg-[#6f4ae6] content-stretch flex gap-[12px] h-[48px] items-center justify-center px-[24px] py-[8px] relative rounded-[999px] shrink-0 w-[250px] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#5d3ec7]" data-name="btn">
            <div aria-hidden="true" className="absolute border-2 border-[#6f4ae6] border-solid inset-0 pointer-events-none rounded-[999px]" />
            <div className="flex flex-col font-['Funnel_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
              <p className="leading-[1.2]">Ver mais</p>
            </div>
            <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-right text-white whitespace-nowrap">arrow-down</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-white w-full">
      <p className="font-['Funnel_Display:Bold',sans-serif] relative shrink-0 text-[40px] w-full">Capacidades para políticas educacionais em tempos de crise</p>
      <p className="font-['Funnel_Sans:Medium',sans-serif] relative shrink-0 text-[18px] w-full">Um livro que analisa os caminhos da educação pública e as competências necessárias para que gestores e formuladores de políticas públicas consigam desenhar e implementar ações eficazes, especialmente durante contextos de crise, como a pandemia de Covid-19</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start leading-[1.4] min-h-px min-w-px not-italic relative" data-name="Frame" data-aos="fade-right">
      <p className="font-['Funnel_Sans:Medium',sans-serif] relative shrink-0 text-[#ffd23c] text-[16px] w-full">Livro Paradidático</p>
      <Frame62 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-[#7e1b43] relative rounded-[44px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[150px] items-center px-[100px] py-[80px] relative w-full">
          <Frame11 />
          <div className="h-[480px] relative rounded-[24px] shrink-0 w-[545px]" data-name="image 6" data-aos="zoom-in">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
              <img alt="" className="absolute h-[108.2%] left-0 max-w-none top-[-4.73%] w-full" src={imgImage6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[240px] relative w-full">
          <Frame61 />
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 text-[#1f2738] w-full">
      <p className="font-['Funnel_Display:Bold',sans-serif] relative shrink-0 text-[40px] w-full">Pronto para dar o primeiro passo pela Primeira Infância?</p>
      <p className="font-['Funnel_Sans:Medium',sans-serif] relative shrink-0 text-[18px] w-full">Fale com Gilson e descubra como o Método GILSON pode ser aplicado no seu município.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Frame" data-aos="fade-left">
      <div className="content-stretch flex flex-col items-start justify-between pl-[54px] py-[54px] relative size-full">
        <Frame65 />
        <div className="bg-[#6f4ae6] content-stretch flex gap-[12px] h-[48px] items-center justify-center px-[24px] py-[8px] relative rounded-[999px] shrink-0 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#5d3ec7]" data-name="btn">
          <div aria-hidden="true" className="absolute border-2 border-[#6f4ae6] border-solid inset-0 pointer-events-none rounded-[999px]" />
          <div className="flex flex-col font-['Funnel_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
            <p className="leading-[1.2]">Clique aqui e descubra</p>
          </div>
          <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-right text-white whitespace-nowrap">arrow-right</p>
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-white content-stretch flex gap-[72px] items-start overflow-clip relative rounded-[44px] shrink-0 w-[1440px]">
      <Frame12 />
      <div className="h-[377px] relative shrink-0 w-[713px]" data-name="image 4" data-aos="zoom-in">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-[#f7f6f2] relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[240px] py-[100px] relative w-full">
          <Frame64 />
        </div>
      </div>
    </div>
  );
}

function Btn() {
  return <div className="bg-[#2ea6ff] flex-[1_0_0] h-[61px] min-h-px min-w-px cursor-pointer transition-all duration-300 hover:opacity-80" data-name="btn" />;
}

function Btn1() {
  return <div className="bg-[#31bf71] flex-[1_0_0] h-[61px] min-h-px min-w-px cursor-pointer transition-all duration-300 hover:opacity-80" data-name="btn" />;
}

function Btn2() {
  return <div className="bg-[#ffd23c] flex-[1_0_0] h-[61px] min-h-px min-w-px cursor-pointer transition-all duration-300 hover:opacity-80" data-name="btn" />;
}

function Btn3() {
  return <div className="bg-[#ff791b] flex-[1_0_0] h-[61px] min-h-px min-w-px cursor-pointer transition-all duration-300 hover:opacity-80" data-name="btn" />;
}

function Btn4() {
  return <div className="bg-[#6f4ae6] flex-[1_0_0] h-[61px] min-h-px min-w-px cursor-pointer transition-all duration-300 hover:opacity-80" data-name="btn" />;
}

function Btn5() {
  return <div className="bg-[#d62a70] flex-[1_0_0] h-[61px] min-h-px min-w-px cursor-pointer transition-all duration-300 hover:opacity-80" data-name="btn" />;
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Btn />
      <Btn1 />
      <Btn2 />
      <Btn3 />
      <Btn4 />
      <Btn5 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start relative shrink-0 w-[1920px]">
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-white w-[103px]" data-name="Frame">
      <p className="relative shrink-0 w-full">Início</p>
      <p className="relative shrink-0 w-full">Sobre mim</p>
      <p className="relative shrink-0 w-full">Método GILSON</p>
      <p className="relative shrink-0 w-full">Produtos</p>
      <p className="relative shrink-0 w-full">PAEPI 100</p>
      <p className="relative shrink-0 w-full">Blog</p>
    </div>
  );
}

function FooterCol() {
  return (
    <div className="content-stretch flex flex-col font-['Funnel_Sans:Medium',sans-serif] gap-[16px] items-start justify-center leading-[1.4] not-italic relative self-stretch shrink-0 text-[14px]" data-name="footer-col">
      <p className="min-w-full relative shrink-0 text-[#bfaef4] w-[min-content]">NAVEGAÇÃO</p>
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-white w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0">Política de privacidade</p>
      <p className="relative shrink-0">Termos de uso</p>
      <p className="relative shrink-0">LGPD</p>
    </div>
  );
}

function FooterCol1() {
  return (
    <div className="content-stretch flex flex-col font-['Funnel_Sans:Medium',sans-serif] gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 text-[14px] w-[143px]" data-name="footer-col">
      <p className="relative shrink-0 text-[#bfaef4] w-full">LEGAL</p>
      <Frame15 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#4b3399] content-stretch flex flex-col items-center justify-center relative rounded-[9999px] shrink-0 size-[44px] cursor-pointer transition-all duration-300 hover:bg-[#5d3ec7] hover:scale-110 hover:shadow-lg">
      <div className="flex flex-col font-['Font_Awesome_6_Brands:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[1.4]">google-scholar</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[22.232px] relative shrink-0 w-[17.008px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0077 22.2314">
        <g id="Group 3">
          <path d={svgPaths.p165bd000} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p33b60600} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p385ca180} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#4b3399] content-stretch flex flex-col items-center justify-center relative rounded-[9999px] shrink-0 size-[44px] cursor-pointer transition-all duration-300 hover:bg-[#5d3ec7] hover:scale-110 hover:shadow-lg">
      <Group />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#4b3399] content-stretch flex flex-col items-center justify-center relative rounded-[9999px] shrink-0 size-[44px] cursor-pointer transition-all duration-300 hover:bg-[#5d3ec7] hover:scale-110 hover:shadow-lg">
      <div className="flex flex-col font-['Font_Awesome_6_Brands:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[1.4]">instagram</p>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
      <Frame23 />
      <Frame26 />
      <Frame24 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Poppins:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[40px] text-white w-[265px]">Gilson Araújo</p>
      <FooterCol />
      <FooterCol1 />
      <Frame67 />
    </div>
  );
}

function Frame27() {
  return <div className="bg-[#4b3399] h-[2px] shrink-0 w-full" />;
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Funnel_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[1.4]">© Gilson Araújo 2026. Todos os direitos reservados.</p>
      </div>
      <div className="h-[20px] relative shrink-0 w-[252px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 20">
          <g id="Vector">
            <path d={svgPaths.p246fbb80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p16c1a680} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3ea63700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1eaaa000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p25b37500} fill="var(--fill-0, white)" />
            <path d={svgPaths.pc1cf430} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3e387980} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33069300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p6caa000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3dc42a80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p36a4a580} fill="var(--fill-0, white)" />
            <path d={svgPaths.p51cbc00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1b1f1b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p8675800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p256500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p13ce0800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p7b52200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2cab280} fill="var(--fill-0, white)" />
            <path d={svgPaths.p30c9a900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p45bee00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p98bad80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2b7e28c0} fill="var(--fill-0, white)" />
            <path d={svgPaths.pbf94400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p359af000} fill="var(--fill-0, white)" />
            <path d={svgPaths.pf97bd00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p10231200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3551cd00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1b170300} fill="var(--fill-0, white)" />
            <path d={svgPaths.pb87c780} fill="var(--fill-0, white)" />
            <path d={svgPaths.p119a4a80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p34ba5c00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2f454d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p30d76700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2dfa5d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2bc73b40} fill="var(--fill-0, white)" />
            <path d={svgPaths.p29a11370} fill="var(--fill-0, white)" />
            <path d={svgPaths.p260f2030} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#281f47] content-stretch flex flex-col gap-[32px] items-end px-[240px] py-[100px] relative shrink-0 w-[1920px]" data-name="Footer">
      <Frame25 />
      <Frame27 />
      <Frame28 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#f7f6f2] content-stretch flex flex-col items-center relative size-full" data-name="Home">
      <Frame29 />
      <Frame32 />
      <Frame33 />
      <Frame49 />
      <Frame37 />
      <Frame50 />
      <Frame48 />
      <Frame60 />
      <Frame63 />
      <Frame66 />
      <Footer />
    </div>
  );
}