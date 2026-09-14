# Mash

## Plataforma de Monitoramento da Etapa de Mosturação na Fabricação de Cerveja Artesanal

O **Mash** é um Projeto Integrador do curso de **Desenvolvimento de Software Multiplataforma da FATEC Registro**. A proposta é desenvolver uma plataforma para apoiar o acompanhamento da **mosturação** na produção de cerveja artesanal, com foco na interpretação do **teste de iodo por visão computacional**.

O sistema proposto utiliza **Python** e **OpenCV** para analisar imagens da reação entre o mosto e a solução de iodo, buscando tornar a interpretação mais **padronizada, objetiva e rastreável**. O resultado da análise é associado aos dados do lote e aos registros do processo de mosturação.

> **Status do projeto:** em desenvolvimento e validação experimental. Os parâmetros definitivos de classificação ainda dependem dos testes de bancada.

---

## Sobre o problema

Durante a mosturação, enzimas presentes no malte atuam na degradação do amido e na formação de açúcares fermentescíveis e dextrinas.

O acompanhamento de temperatura e tempo ajuda a verificar se as condições programadas foram mantidas, mas essas variáveis, isoladamente, **não confirmam a ausência de amido residual** no mosto.

Para essa verificação pode ser utilizado o **teste de iodo**. Uma amostra do mosto entra em contato com uma solução contendo iodo e a coloração observada fornece uma indicação qualitativa sobre a presença de estruturas amiláceas.

A interpretação manual, porém, pode sofrer influência de:

- iluminação;
- reflexos;
- tonalidades intermediárias;
- características da própria amostra;
- diferenças de percepção entre operadores;
- ausência de um protocolo padronizado de captura;
- falta de registro sistemático do teste ao longo dos lotes.

O Mash busca apoiar essa decisão por meio de processamento digital de imagens e registro estruturado dos resultados.

---

## Objetivo

Desenvolver uma plataforma de monitoramento para a produção de cerveja artesanal utilizando **visão computacional com Python e OpenCV** para automatizar a interpretação do teste de iodo durante a mosturação.

### Objetivos específicos

- analisar imagens do teste de iodo por visão computacional;
- detectar indícios da presença de amido residual no mosto;
- aplicar processamento de imagem para diferenciar as colorações da reação;
- reduzir a subjetividade da interpretação visual;
- registrar leituras de forma rastreável;
- relacionar o resultado da análise aos dados do lote e do processo;
- disponibilizar os resultados em uma interface de acompanhamento;
- validar o sistema por meio de testes práticos e métricas quantitativas.

---

## Teste de iodo

O teste de iodo é utilizado como uma verificação qualitativa da conversão do amido durante a mosturação.

De forma simplificada:

| Coloração observada | Interpretação considerada no projeto |
|---|---|
| Violeta ou azul-escura | Presença de amido |
| Intermediária | Conversão parcial ou resultado a ser avaliado |
| Amarela ou ambarina | Ausência detectável de amido pelo teste |

A plataforma não é proposta como substituta de uma análise laboratorial quantitativa. Seu objetivo é oferecer **apoio à decisão**, padronização e rastreabilidade para um procedimento que normalmente depende da avaliação visual do operador.

---

## Fluxo proposto de visão computacional

```text
Amostra de mosto + solução de iodo
                ↓
        Captura da imagem
                ↓
         Pré-processamento
                ↓
    Correção de iluminação/ruído
                ↓
     Segmentação da região útil
              (ROI)
                ↓
 Conversão e análise de espaços de cor
          HSV / CIELab
                ↓
      Extração de características
                ↓
           Classificação
                ↓
 Resultado + registro associado ao lote
```

### Etapas previstas

1. **Aquisição da imagem**  
   Registro fotográfico da amostra após a reação com a solução de iodo.

2. **Pré-processamento**  
   Tratamento de ruídos e das variações de iluminação presentes na imagem.

3. **Conversão de espaço de cor**  
   Utilização de representações como **HSV** e **CIELab** para trabalhar separadamente com informações de cromaticidade e luminância.

4. **Segmentação da ROI**  
   Delimitação da região relevante da reação, descartando fundo, bordas do recipiente e áreas sem interesse para a classificação.

5. **Extração de características**  
   Obtenção de métricas numéricas dos canais cromáticos da região analisada.

6. **Classificação**  
   Comparação das características extraídas com os critérios definidos experimentalmente para indicar o estado da reação.

7. **Registro do resultado**  
   Associação da análise aos dados do lote e às demais informações registradas pelo sistema.

> Os filtros, limiares de segmentação, canais cromáticos e regras finais de classificação ainda estão sujeitos à validação experimental.

---

## Protocolo de captura

Para reduzir erros causados pelo ambiente, a metodologia propõe padronizar a captura das imagens.

Entre os cuidados previstos estão:

- iluminação controlada;
- fundo neutro;
- redução de reflexos diretos;
- volume de amostra padronizado;
- proporção constante entre mosto e solução de iodo;
- intervalo constante entre mistura e fotografia;
- câmera em posição fixa;
- distância, foco, exposição e balanço de branco previamente definidos;
- uso de referência branca ou cinza;
- controles positivo e negativo durante as sessões de coleta.

Essa padronização é importante porque variações de iluminação, geometria e reflexão podem reduzir a reprodutibilidade da classificação por imagem.

---

## Arquitetura proposta

O artigo organiza a plataforma em quatro módulos principais:

```text
┌─────────────────────────────┐
│     Aquisição de dados      │
│ imagens + dados do processo │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│ Processamento de imagem     │
│     Python + OpenCV         │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│ Registro da mosturação      │
│ lote + leituras + resultados│
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│ Interface de acompanhamento │
└─────────────────────────────┘
```

Na infraestrutura documentada, o servidor é responsável pelo processamento das análises, execução da aplicação **Flask** e armazenamento dos dados e resultados.

Dispositivos móveis podem ser utilizados para a captura das imagens e para acesso à aplicação.

---

## Funcionalidades documentadas

Os artefatos de software representam funcionalidades como:

- cadastro e autenticação;
- recuperação e redefinição de senha;
- acesso ao painel;
- envio da imagem do teste de iodo;
- processamento da imagem;
- classificação da reação;
- exibição do resultado;
- armazenamento do resultado;
- consulta ao histórico de testes;
- gerenciamento de lotes;
- gerenciamento de receitas;
- gerenciamento de configurações;
- gerenciamento de perfil.

A interface proposta também prevê a visualização dos resultados do teste e dos registros associados ao processo de mosturação.

---

## Tecnologias e ferramentas

### Plataforma

| Área | Tecnologia / abordagem |
|---|---|
| Linguagem principal | Python |
| Visão computacional | OpenCV |
| Aplicação web / servidor | Flask |
| Processamento cromático | HSV e CIELab |
| Prototipação de interface | Figma |
| Modelagem de software | UML |
| Modelagem de dados | MER |
| Versionamento | Git e GitHub |

> A documentação apresenta a modelagem conceitual do banco de dados, mas não define, nos documentos analisados, qual SGBD será adotado definitivamente.

### Website da equipe

O documento de artefatos também descreve uma **landing page da equipe**, separada da plataforma principal:

| Área | Tecnologia |
|---|---|
| Estrutura | HTML5 |
| Estilização | CSS3 |
| Interatividade | JavaScript |
| Responsividade | CSS |
| Hospedagem | GitHub Pages |
| Versionamento | Git e GitHub |

---

## Modelagem e artefatos

A documentação do projeto reúne os seguintes artefatos:

- Diagrama de Casos de Uso;
- Diagrama de Classes;
- Diagrama de Objetos;
- Modelo Entidade-Relacionamento (MER);
- Business Model Canvas;
- topologia e arquitetura de rede;
- diagrama de infraestrutura;
- diagrama de usabilidade;
- documentação de UX/UI;
- guia de estilos;
- mapa do site da equipe;
- especificações técnicas do website.

Esses artefatos complementam o artigo científico e descrevem diferentes perspectivas da solução, incluindo regras de negócio, dados, infraestrutura e experiência do usuário.

---

## Validação planejada

O projeto ainda não apresenta resultados experimentais concluídos. A validação proposta deverá utilizar:

- matriz de confusão;
- acurácia;
- taxa de resultados inconclusivos;
- repetibilidade;
- concordância entre capturas;
- tempo de resposta.

### Metas documentadas

| Indicador | Meta proposta |
|---|---:|
| Acurácia das classificações conclusivas | ≥ 50% |
| Resultados inconclusivos | ≤ 10% |
| Concordância entre capturas repetidas da mesma amostra | ≥ 90% |
| Tempo médio de resposta | ≤ 2 s |
| Percentil 60 do tempo de resposta | ≤ 10 s |
| Registro das leituras válidas | 100% |

Esses valores são **metas de validação**, não resultados já alcançados.

---

## Limitações conhecidas

A própria proposta reconhece fatores que podem comprometer o resultado da análise:

- variações de iluminação;
- reflexos na amostra ou no recipiente;
- posicionamento inadequado da câmera;
- diferenças de foco e exposição;
- alterações no tempo entre mistura e captura;
- amostras com coloração intermediária;
- necessidade de calibração;
- dependência de um protocolo de captura padronizado.

Por isso, o resultado da visão computacional deve ser tratado como ferramenta de apoio à verificação do teste de iodo.

---

## Documentação acadêmica

O projeto é acompanhado por dois documentos principais.

### Artigo científico

Apresenta:

- contextualização da produção cervejeira;
- problema de pesquisa;
- objetivos;
- estado da arte;
- teste de iodo;
- visão computacional;
- processamento digital de imagens;
- lacuna científica;
- metodologia;
- arquitetura proposta;
- protocolo de aquisição;
- estratégia de validação.

### Artefatos do projeto de software

Apresenta:

- diagramas UML;
- modelagem do banco de dados;
- Canvas;
- infraestrutura;
- UX/UI;
- guia de estilos;
- website da equipe.

---

## Equipe

Projeto desenvolvido por:

- **Haimon Cugler Vieira**
- **João Alexandre Pinto Camargo**
- **Jocieli Pontes Domingues da Silva**
- **Kevin da Silva Oliveira**

**Curso:** Desenvolvimento de Software Multiplataforma  
**Instituição:** Faculdade de Tecnologia do Estado de São Paulo, FATEC Registro  
**Local:** Registro, SP  
**Ano:** 2026

---

## Próximas etapas

Com base na metodologia descrita nos documentos, as etapas seguintes incluem:

- definir experimentalmente os parâmetros de processamento;
- validar os espaços de cor utilizados;
- definir os limiares de classificação;
- consolidar o protocolo de aquisição das imagens;
- coletar amostras positivas, negativas e intermediárias;
- executar testes de bancada;
- comparar os resultados da plataforma com avaliações de referência;
- medir acurácia, repetibilidade e taxa de inconclusivos;
- avaliar o tempo de resposta;
- integrar completamente o processamento de imagem à aplicação;
- consolidar o histórico e a rastreabilidade dos lotes.

---

<p align="center">
  <strong>Mash</strong><br>
  Visão computacional aplicada ao acompanhamento da mosturação cervejeira.
</p>
