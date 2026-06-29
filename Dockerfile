# Ambiente reprodutivel do pacote de replicacao.
# Node 20 (Jest / StrykerJS no baseline-project e nos cenarios) + Python 3 (scoring).
FROM node:20-bookworm

# Fuso fixo: o scoring de data/hora (RQ3') depende do TZ. Mantem o resultado deterministico.
ENV TZ=UTC \
    DEBIAN_FRONTEND=noninteractive \
    PIP_BREAK_SYSTEM_PACKAGES=1

# Python 3 + pip + bash (os scripts de scoring sao bash).
RUN apt-get update \
 && apt-get install -y --no-install-recommends python3 python3-pip python3-venv bash ca-certificates \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /pkg

# Dependencias Python do scoring (camada cacheada antes de copiar o resto).
COPY requirements.txt ./
RUN pip3 install --no-cache-dir -r requirements.txt

# Copia o pacote (node_modules e segredos sao excluidos via .dockerignore).
COPY . .

# Instala as deps do baseline-project: run_static_metrics.sh exige baseline-project/node_modules.
RUN cd ai-experiment/baseline-project \
 && (npm ci || npm install)

WORKDIR /pkg/ai-experiment
CMD ["bash"]
