// app/lab/page.tsx
'use client'

import { useState, useEffect, useCallback } from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
    HoverCard,
    HoverCardTrigger,
    HoverCardContent
} from "@/components/ui/hover-card";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogTrigger
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from 'framer-motion';
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Terminal } from '@/components/ui/terminal';
import { CodeBlock } from '@/components/ui/code-block';
import { experiments } from '@/data/Experiments';

const LabPage = () => {
    const [activeExperiment, setActiveExperiment] = useState<string | null>(null);
    const [codeProgress, setCodeProgress] = useState(0);
    const [settings, setSettings] = useState({
        darkMode: true,
        performanceMode: false,
        animationLevel: 1,
        experimentalFeatures: false
    });
    const [debugLogs, setDebugLogs] = useState<string[]>([]);

    // Simulated debug logger
    const addDebugLog = useCallback((message: string) => {
        setDebugLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
    }, []);

    useEffect(() => {
        if (activeExperiment) {
            const interval = setInterval(() => {
                setCodeProgress(prev => {
                    if (prev >= 100) {
                        addDebugLog('Simulation completed successfully');
                        clearInterval(interval);
                        return 100;
                    }
                    addDebugLog(`Compiling... ${prev + 10}%`);
                    return Math.min(prev + 10, 100);
                });
            }, 300);
            return () => clearInterval(interval);
        }
    }, [activeExperiment, addDebugLog]);

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setActiveExperiment(null);
                setCodeProgress(0);
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Animated Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    Laboratório Experimental
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Ambiente interativo de pesquisas em andamento e protótipos
                </p>
            </motion.div>

            {/* Main Lab Interface */}
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Experiment List */}
                <div className="lg:col-span-1 space-y-4">
                    <Tabs defaultValue="all">
                        <TabsList className="grid grid-cols-2">
                            <TabsTrigger value="all">Tudo</TabsTrigger>
                            <TabsTrigger value="active">Ativos</TabsTrigger>
                        </TabsList>

                        <div className="mt-6 space-y-4">
                            {experiments.map((exp) => (
                                <motion.div
                                    key={exp.id}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <Card
                                        className={`cursor-pointer transition-all ${activeExperiment === exp.id
                                            ? 'border-primary ring-2 ring-primary/20'
                                            : 'hover:border-primary/50'
                                            }`}
                                        onClick={() => {
                                            setActiveExperiment(exp.id);
                                            setCodeProgress(0);
                                            setDebugLogs([]);
                                        }}
                                    >
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <CardTitle>{exp.title}</CardTitle>
                                                <Badge variant={exp.status === 'stable' ? 'default' : 'destructive'}>
                                                    {exp.status}
                                                </Badge>
                                            </div>
                                            <CardDescription>{exp.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-muted-foreground">Complexidade:</span>
                                                <Badge variant="secondary">{exp.difficulty}</Badge>
                                            </div>
                                            {exp.dependencies && (
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm text-muted-foreground">Dependencias:</span>
                                                    <div className="flex flex-wrap gap-1">
                                                        {exp.dependencies.map((dep) => (
                                                            <Badge key={dep} variant="outline">{dep}</Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </Tabs>
                </div>

                {/* Active Experiment Panel */}
                <div className="lg:col-span-2 min-h-[600px] relative">
                    <AnimatePresence mode='popLayout'>
                        {activeExperiment ? (
                            <motion.div
                                key={activeExperiment}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                className="absolute inset-0"
                            >
                                <Card className="h-full flex flex-col">
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <CardTitle>
                                                    {experiments.find(e => e.id === activeExperiment)?.title}
                                                </CardTitle>
                                                <div className="mt-2 flex items-center gap-2">
                                                    <Badge variant="outline">
                                                        Runtime: {experiments.find(e => e.id === activeExperiment)?.runtime}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => setActiveExperiment(null)}
                                                className="text-muted-foreground"
                                            >
                                                Fechar (Esc)
                                            </Button>
                                        </div>
                                        <Progress value={codeProgress} className="h-2 mt-4" />
                                    </CardHeader>
                                    <CardContent className="flex-1 overflow-hidden flex flex-col gap-6">
                                        <Terminal className="flex-1">
                                            <div className="h-full overflow-auto">
                                                <CodeBlock
                                                    code={experiments.find(e => e.id === activeExperiment)?.code || ''}
                                                />
                                            </div>
                                        </Terminal>

                                        <div className="grid grid-cols-2 gap-4">
                                            <Dialog>
                                                <HoverCard>
                                                    <HoverCardTrigger>
                                                        <Button variant="outline" className="w-full">
                                                            Debug Console
                                                        </Button>
                                                    </HoverCardTrigger>
                                                    <HoverCardContent className="w-[500px]">
                                                        <div className="space-y-4">
                                                            <h4 className="font-semibold">Debug Logs</h4>
                                                            <div className="h-48 overflow-y-auto font-mono text-sm">
                                                                {debugLogs.map((log, i) => (
                                                                    <div key={i} className="text-muted-foreground">
                                                                        {log}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </HoverCardContent>
                                                </HoverCard>
                                            </Dialog>

                                            <div className="flex gap-2">
                                                <Button
                                                    variant="secondary"
                                                    onClick={() => setCodeProgress(0)}
                                                    className="flex-1"
                                                >
                                                    Restart
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    disabled={codeProgress < 100}
                                                    className="flex-1"
                                                >
                                                    Deploy
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="empty-state"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex items-center justify-center border-2 border-dashed rounded-xl"
                            >
                                <div className="text-center space-y-4">
                                    <p className="text-muted-foreground">
                                        Selecione um experimento no painel à esquerda para começar
                                    </p>
                                    <div className="flex justify-center gap-2">
                                        <Skeleton className="h-4 w-[100px]" />
                                        <Skeleton className="h-4 w-[80px]" />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Enhanced Lab Settings */}
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        className="fixed top-20 right-8"
                    >
                        Configurações
                    </Button>
                </DialogTrigger>
                <DialogContent className="w-[90vw] max-w-[480px] rounded-xl">
                    <DialogHeader className="pb-4">
                        <DialogTitle className="text-lg font-semibold tracking-tight">
                            Configurações de Ambiente
                        </DialogTitle>
                    </DialogHeader>

                    <div className="grid gap-4">
                        {/* Dark Mode */}
                        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                            <div className="space-y-1">
                                <Label className="text-sm font-medium">Dark Mode</Label>
                                <p className="text-sm text-muted-foreground">
                                    Modo Escuro
                                </p>
                            </div>
                            <Switch
                                checked={settings.darkMode}
                                onCheckedChange={(val) => setSettings(prev => ({ ...prev, darkMode: val }))}
                            />
                        </div>

                        {/* Performance Mode */}
                        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                            <div className="space-y-1">
                                <Label className="text-sm font-medium">Modo de Performance</Label>
                                <p className="text-sm text-muted-foreground">
                                    Otimizado para rápida execução
                                </p>
                            </div>
                            <Switch
                                checked={settings.performanceMode}
                                onCheckedChange={(val) => setSettings(prev => ({ ...prev, performanceMode: val }))}
                            />
                        </div>

                        {/* Animation Level */}
                        <div className="p-3 rounded-lg bg-muted/50">
                            <div className="mb-4 space-y-1">
                                <Label className="text-sm font-medium">Nível das Animação</Label>
                                <p className="text-sm text-muted-foreground">
                                    Ajuste a intensidade de movimentos
                                </p>
                            </div>
                            <div className="px-2">
                                <Slider
                                    value={[settings.animationLevel]}
                                    max={3}
                                    min={0}
                                    step={1}
                                    onValueChange={(val) => setSettings(prev => ({ ...prev, animationLevel: val[0] }))}
                                />
                                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                                    <span>Desligado</span>
                                    <span>Máx</span>
                                </div>
                            </div>
                        </div>

                        {/* Experimental Features */}
                        <div className="p-3 rounded-lg bg-destructive/10">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <Label className="text-sm font-medium text-destructive">
                                        Recursos Experimentais
                                    </Label>
                                    <p className="text-sm text-destructive/70">
                                        Ativar recursos instáveis
                                    </p>
                                </div>
                                <Switch
                                    checked={settings.experimentalFeatures}
                                    onCheckedChange={(val) => setSettings(prev => ({ ...prev, experimentalFeatures: val }))}
                                    className="data-[state=checked]:bg-destructive"
                                />
                            </div>
                        </div>
                    </div>

                    <DialogFooter className="mt-4">
                        <Button
                            type="submit"
                            className="w-full"
                            onClick={() => console.log('Settings saved:', settings)}
                        >
                            Salvar Configurações
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default LabPage;