import Link from "next/link";
import React from "react";

const GenerationSequencingNgsDetailsArea = () => {
  return (
    <>
      <section className="services-details pt-130 pb-120">
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-6 col-md-12">
              <div
                className="services-thumb-img mb-50 wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <img
                  src="/assets/img/services/services-thumb-07.jpg"
                  alt="services-thumb"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="services-thumb-img mb-50 wow fadeInRight"
                data-wow-delay=".4s"
              >
                <img
                  src="/assets/img/services/services-thumb-08.jpg"
                  alt="services-thumb"
                />
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-srv-process mb-50">
                <h4 className="tp-srv-process__title mb-30">
                  Generation Sequencing (NGS) 
                </h4>
                <p className="mb-20">
                  These services include:
                </p>
                <ul className="ml-30 mb-40">
                  <li><strong>- These services include</strong></li>
                  <li><strong>- Whole Exome Sequencing</strong></li>
                  <li><strong>- Long Read sequencing</strong></li>
                  <li><strong>-	Custom panel design and sequencing </strong></li>
                  <li><strong>-	Comprehensive genome wide exploratory identification of genetic variants by short read or long read whole genome sequencing (WGS).</strong></li>
                </ul>
                <p className="mb-20">
                This includes
                </p>
                <ul className="ml-30 mb-40">
                  <li><p>-	Our services include targeted exploration of pathogenic genetic variants using short read whole exome sequencing (WES). With this approach, we focus on analyzing protein coding regions of the entire genome to identify both common and rare benign or pathogenic variants and single nucleotide polymorphisms (SNPs).</p></li>
                  <li><p>-	For precision diagnostics and personalized medicine, we offer high sensitivity detection of disease-associated genetic variants through the design and sequencing of targeted custom Next Generation Sequencing (NGS) panels. These panels are specifically tailored to interrogate genomic regions of interest associated with various diseases, enabling accurate identification of disease-related variants.</p></li>
                  <li><p>-	Additionally, we offer all type of cancer panel specially breast and ovarian cancer panel designed to specifically target genes and variants associated with these types of cancer. This panel enables the identification of genetic alterations relevant to breast and ovarian cancer, aiding in risk assessment, early detection, and personalized treatment strategies.</p></li>
                </ul>

                <p>Through our targeted NGS approaches and specialized panels, we provide researchers and clinicians with powerful tools for the identification and characterization of disease-associated genetic variants, fostering advancements in precision medicine and personalized healthcare.</p>
                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-srv-stap mb-40">
                <h4 className="tp-srv-stap__title mb-25">Genome sequencing</h4>
                <p>
                Our services include the application of Pacbio&apos;s SMRT Link software for the analysis of long read sequencing data, enabling the identification of genetic variants and quantification of transcriptomic elements.
                </p>
                <p>
                Utilizing Pacbio&apos;s state-of-the-art Sequel II platform, we generate long read sequencing data that provides valuable insights into genetic variations and transcriptomic profiles. To analyze this data, we employ Pacbio&apos;s proprietary SMRT Link software, a cutting-edge software solution specifically designed for the analysis of long read data.
                </p>
                <p>
                Our available services encompass a range of applications, including Whole Genome Sequencing (WGS) and Whole Exome Sequencing (WES), enabling comprehensive analysis of the entire genome or specific protein-coding regions, respectively. We also offer viral and metagenomic sequencing services, allowing for the identification and characterization of viral genomes and the analysis of complex microbial communities. Additionally, our ISO Seq service caters to transcriptome sequencing, providing in-depth understanding of the transcriptomic landscape.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div
                className="services-thumb-img mb-50 wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <img
                  src="/assets/img/banner/generation-sequencing-ngs-01.jpg"
                  alt="services-thumb"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-srv-research mb-50">
                <h4 className="tp-srv-research__title mb-25">The clinical curation</h4>
                <p>
                The clinical curation and reporting of genetic variants by a panel of certified clinical geneticists using the Fabric Genomics clinical curation system.
                </p>
                <p>With the aid of Fabric Genomics, we perform comprehensive manual curation of variants identified through Next Generation Sequencing (NGS) technologies. Our assays are conducted within a GxP compliant environment, ensuring adherence to rigorous quality and regulatory standards. By leveraging the expertise of Fabric&apos;s team of experts, we are able to accurately identify and classify variants based on their potential impact.</p>
                <p>Through this meticulous process, we provide detailed and reliable clinical reports that offer valuable insights into the genetic variants detected. Our certified clinical geneticists carefully analyze the variants, taking into consideration their relevance to specific conditions or diseases. This enables us to provide meaningful and actionable information to healthcare professionals and researchers, assisting in diagnosis, prognosis, and treatment decision-making.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-srv-stap mb-40">
                <h4 className="tp-srv-stap__title mb-25">The comprehensive profiling of the whole transcriptome</h4>
                <p>Through our transcriptome sequencing methodologies, we enable the analysis of the entire transcriptome, including both <strong>total transcriptome and mRNA sequencing.</strong> This allows for a thorough examination of gene expression patterns and quantification at both the gene and transcript levels.</p>
                <p>Additionally, our transcriptome sequencing approaches facilitate the detection of gene fusions and rearrangements, providing valuable insights into genomic alterations associated with diseases. We also specialize in the identification and characterization of <b>non-coding RNAs, such as microRNAs and Long noncoding RNAs (LNC RNA),</b> which play crucial roles in gene regulation and disease processes.</p>
                <p>Moreover, our transcriptome profiling services <b>support biomarker identification,</b> enabling the discovery of molecular signatures that can be utilized for diagnostic, prognostic, or therapeutic purposes</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GenerationSequencingNgsDetailsArea;
