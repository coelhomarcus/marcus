import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaUndoAlt, FaBrain, FaMugHot, FaCog } from 'react-icons/fa';
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import PageTitle from "@/components/PageTitle/PageTitle";

interface Settings {
    workMinutes: number;
    breakMinutes: number;
}

const Pomodoro: React.FC = () => {
    const [settings, setSettings] = useState<Settings>({
        workMinutes: 25,
        breakMinutes: 5
    });
    const [mode, setMode] = useState<'work' | 'break'>('work');
    const [timeLeft, setTimeLeft] = useState<number>(settings.workMinutes * 60);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [showSettings, setShowSettings] = useState<boolean>(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isActive) {
            timerRef.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        const newMode = mode === 'work' ? 'break' : 'work';
                        setMode(newMode);
                        return newMode === 'work' ? settings.workMinutes * 60 : settings.breakMinutes * 60;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isActive, mode, settings]);

    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const toggleTimer = (): void => setIsActive(!isActive);

    const resetTimer = (): void => {
        if (timerRef.current) clearInterval(timerRef.current);
        setIsActive(false);
        setTimeLeft(mode === 'work' ? settings.workMinutes * 60 : settings.breakMinutes * 60);
    };

    const switchMode = (newMode: 'work' | 'break'): void => {
        setMode(newMode);
        setIsActive(false);
        setTimeLeft(newMode === 'work' ? settings.workMinutes * 60 : settings.breakMinutes * 60);
    };

    const updateSettings = (key: keyof Settings, value: number): void => {
        if (value < 1) value = 1;
        setSettings(prev => ({ ...prev, [key]: value }));

        if ((key === 'workMinutes' && mode === 'work') ||
            (key === 'breakMinutes' && mode === 'break')) {
            setTimeLeft(value * 60);
        }
    };

    return (
        <div className="text-neutral-300">
            <PageTitle title={formatTime(timeLeft)} suffix={mode === 'work' ? ' - Foco' : ' - Descanso'} />
            <h1 className="text-xl font-semibold mb-2">Pomodoro</h1>
            <p className="text-neutral-400 text-sm mb-4">
                Uma técnica simples de gerenciamento de tempo para aumentar sua produtividade.
            </p>

            <div className="bg-[#0A0A0A] border border-foreground/10 rounded-lg p-6 shadow-inner shadow-neutral-800 mb-6">
                {/* Timer Display */}
                <div className="mb-3">
                    <div className="flex justify-center mb-4">
                        <Badge
                            className={`${mode === 'work' ? 'bg-pink-900/30 text-pink-300' : 'bg-purple-900/30 text-purple-300'}`}
                        >
                            {mode === 'work' ? 'Hora do Foco' : 'Bom Descanso'}
                        </Badge>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className={`text-center font-['Courier_Prime']! font-semibold text-5xl transition-colors duration-300 ${isActive
                            ? mode === 'work'
                                ? 'text-pink-300'
                                : 'text-purple-300'
                            : 'text-neutral-300'
                            }`}>
                            {formatTime(timeLeft)}
                        </div>
                    </div>
                </div>

                {/* Controles Principais */}
                <div className="flex justify-center space-x-4 mb-6 *:cursor-pointer">
                    <button
                        onClick={toggleTimer}
                        className="p-3 rounded-full bg-neutral-950 border  border-neutral-800 text-neutral-300 hover:bg-neutral-900/65 hover:scale-105 active:scale-95  transition-all">
                        {isActive ? <FaPause size={20} /> : <FaPlay size={20} />}
                    </button>
                    <button
                        onClick={resetTimer}
                        className="p-3 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-300 hover:bg-neutral-900/65 hover:scale-105 active:scale-95 transition-all">
                        <FaUndoAlt size={20} />
                    </button>
                </div>

                {/* Seleção de Modo */}
                <div className="flex justify-center space-x-3 mb-6">
                    <button
                        onClick={() => switchMode('work')}
                        className={`px-4 py-2 rounded-md flex items-center border  ${mode === 'work'
                            ? 'bg-pink-900/20 text-pink-300 border-pink-800/50'
                            : 'cursor-pointer bg-neutral-950 text-neutral-400 border-neutral-800 hover:bg-neutral-900/65'
                            } transition-colors`}
                    >
                        <FaBrain className="mr-2" />
                        Foco
                    </button>
                    <button
                        onClick={() => switchMode('break')}
                        className={`px-4 py-2 rounded-md flex items-center border ${mode === 'break'
                            ? 'bg-purple-900/20 text-purple-300 border-purple-800/50'
                            : 'cursor-pointer bg-neutral-950 text-neutral-400 border-neutral-800 hover:bg-neutral-900/65'
                            } transition-colors`}
                    >
                        <FaMugHot className="mr-2" />
                        Descanso
                    </button>
                </div>

                {/* Configurações */}
                <div className="mt-6">
                    <button
                        onClick={() => setShowSettings(!showSettings)}
                        className="flex items-center justify-center w-full px-4 py-2 border border-neutral-800 rounded-md text-neutral-300 hover:bg-neutral-900/50 cursor-pointer transition-colors"
                    >
                        <FaCog className="mr-2" />
                        {showSettings ? 'Ocultar Configurações' : 'Configurações'}
                    </button>

                    {showSettings && (
                        <div className="mt-4 p-5 rounded-md border border-neutral-800 shadow-lg">
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-medium text-neutral-300">Tempo de Foco</label>
                                        <span className="text-pink-300 font-medium">{settings.workMinutes} min</span>
                                    </div>
                                    <Slider
                                        min={1}
                                        max={60}
                                        step={1}
                                        value={[settings.workMinutes]}
                                        onValueChange={(values) => updateSettings('workMinutes', values[0])}
                                        className="w-full"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-medium text-neutral-300">Tempo de Descanso</label>
                                        <span className="text-purple-300 font-medium">{settings.breakMinutes} min</span>
                                    </div>
                                    <Slider
                                        min={1}
                                        max={30}
                                        step={1}
                                        value={[settings.breakMinutes]}
                                        onValueChange={(values) => updateSettings('breakMinutes', values[0])}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Pomodoro;