interface Experiment {
    id: string;
    title: string;
    description: string;
    difficulty: string;
    status: 'stable' | 'beta';
    code: string;
    dependencies?: string[];
    runtime?: string;
}


export const experiments: Experiment[] = [
    {
        id: 'neural-net',
        title: 'Visualizador de Rede Neural',
        description: 'Visualização em tempo real de arquitetura de deep learning',
        difficulty: 'Avançado',
        status: 'stable',
        code: `class NeuralNetwork {
  constructor() {
    this.layers = [];
  }
  
  addLayer(nodes, activation='relu') {
    this.layers.push({ nodes, activation });
  }
}`,
        dependencies: ['TensorFlow.js', 'D3.js'],
        runtime: 'Node 18.4.0'
    },
    {
        id: 'realtime-chat',
        title: 'Sistema de Chat em Tempo Real',
        description: 'Sistema de mensagens baseado em WebSocket com criptografia ponta a ponta',
        difficulty: 'Intermediário',
        status: 'stable',
        code: `function handleMessage(message) {
  const encrypted = encryptMessage(message);
  broadcastToClients(encrypted);
}`,
        dependencies: ['Socket.IO', 'Node.js', 'Redis'],
        runtime: 'Bun 1.0.0'
    },
    {
        id: 'data-viz',
        title: 'Visualização de Dados 3D',
        description: 'Renderização interativa em 3D de grandes conjuntos de dados',
        difficulty: 'Avançado',
        status: 'beta',
        code: `function renderPointCloud(points) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new Float32Array(points));
  scene.add(new THREE.Points(geometry, material));
}`,
        dependencies: ['Three.js', 'WebGL'],
        runtime: 'Deno 1.35.0'
    },
    {
        id: 'auth-system',
        title: 'Microsserviço de Autenticação',
        description: 'Autenticação baseada em JWT com provedores OAuth2',
        difficulty: 'Intermediário',
        status: 'stable',
        code: `async function oauthCallback(req) {
  const user = await validateToken(req.token);
  return generateSession(user);
}`,
        dependencies: ['NextAuth.js', 'Redis', 'PostgreSQL'],
        runtime: 'Node 20.3.0'
    }
];