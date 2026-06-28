import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, Database, MessageSquare, Play, RotateCcw, LucideIcon } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

type NodeState = 'idle' | 'executing' | 'success';

interface NodeItem {
  id: 'webhook' | 'llm' | 'pinecone' | 'slack';
  label: string;
  sub: string;
  metric: string;
  icon: LucideIcon;
}

const NODES: NodeItem[] = [
  { id: 'webhook', label: 'Webhook', sub: 'Port 8080 // POST', metric: 'payload: GitHub Commit', icon: Zap },
  { id: 'llm', label: 'LangChain Agent', sub: 'gpt-4o-mini // Completion', metric: 'system: extract_commits', icon: Cpu },
  { id: 'pinecone', label: 'Pinecone DB', sub: 'index: commits-v1 // Upsert', metric: 'vectors: 1536 dims', icon: Database },
  { id: 'slack', label: 'Slack Alerts', sub: 'channel: #ops-logs', metric: 'postMessage: [OK]', icon: MessageSquare },
];

const Automation: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [nodeStates, setNodeStates] = useState<Record<string, NodeState>>({
    webhook: 'idle', llm: 'idle', pinecone: 'idle', slack: 'idle',
  });

  const triggerPipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(1);
    setNodeStates({ webhook: 'executing', llm: 'idle', pinecone: 'idle', slack: 'idle' });

    const steps = [
      { delay: 1200, step: 2, states: { webhook: 'success' as NodeState, llm: 'executing' as NodeState } },
      { delay: 2400, step: 3, states: { llm: 'success' as NodeState, pinecone: 'executing' as NodeState } },
      { delay: 3600, step: 4, states: { pinecone: 'success' as NodeState, slack: 'executing' as NodeState } },
      { delay: 4800, step: 5, states: { slack: 'success' as NodeState } },
    ];

    steps.forEach(({ delay, step, states }) => {
      setTimeout(() => {
        setActiveStep(step);
        setNodeStates((prev) => ({ ...prev, ...states }));
        if (step === 5) setIsRunning(false);
      }, delay);
    });
  };

  const resetPipeline = () => {
    setIsRunning(false);
    setActiveStep(0);
    setNodeStates({ webhook: 'idle', llm: 'idle', pinecone: 'idle', slack: 'idle' });
  };

  const logs = [
    activeStep === 0 && '>> PIPELINE IDLE. WAITING FOR TRIGGER SIGNAL...',
    activeStep >= 1 && '>> [00:01] Webhook triggered. Received GitHub push event.',
    activeStep >= 2 && '>> [00:03] Payload parsed. Dispatched to LangChain Agent.',
    activeStep >= 3 && '>> [00:05] LLM complete. Upserting vectors to Pinecone DB.',
    activeStep >= 4 && '>> [00:07] Pinecone upsert complete. Triggering Slack alert.',
    activeStep === 5 && '>> [00:09] Workflow #3281 ended successfully. Status: [200].',
  ].filter((l): l is string => Boolean(l));

  return (
    <section id="automation" className="container section-container">
      <SectionHeader
        number="05 // AUTOMATION ENGINE"
        title="Workflow Visualizer"
        subtitle="n8n pipelines connecting webhooks, LLMs, vector databases, and alerts."
      />

      <div className="workflow-canvas-container glass-card">
        <div className="canvas-header-bar">
          <div className="status-tag">
            <span className={`pinger ${isRunning ? 'pulse-gold' : 'stable'}`} />
            <span>n8n_WORKFLOW_ENGINE // {isRunning ? 'EXECUTING' : 'READY'}</span>
          </div>
          <div className="canvas-actions">
            <button className="btn btn-primary magnetic-btn" onClick={triggerPipeline} disabled={isRunning}>
              <Play size={14} /> TRIGGER WORKFLOW
            </button>
            <button className="btn btn-secondary magnetic-btn" onClick={resetPipeline} disabled={isRunning && activeStep !== 5}>
              <RotateCcw size={14} /> RESET
            </button>
          </div>
        </div>

        <div className="workflow-grid-canvas">
          {NODES.map((node, i) => {
            const Icon = node.icon;
            const state = nodeStates[node.id] || 'idle';
            return (
              <div key={node.id} className={`workflow-node-card ${state}`}>
                <div className="node-icon-header">
                  <Icon size={20} className="node-icon" />
                  <span className="node-status-badge">{state}</span>
                </div>
                <div className="node-details">
                  <h4>{node.label}</h4>
                  <p className="sub">{node.sub}</p>
                  <span className="node-metric">{node.metric}</span>
                </div>
                {i < NODES.length - 1 && (
                  <div className={`node-connector ${activeStep > i + 1 ? 'active' : ''}`} />
                )}
              </div>
            );
          })}

          {isRunning && activeStep >= 1 && activeStep <= 4 && (
            <motion.div
              className="connector-pulse-dot"
              initial={{ left: `${(activeStep - 1) * 25 + 5}%` }}
              animate={{ left: `${activeStep * 25 + 5}%` }}
              transition={{ duration: 1.1, ease: 'linear' }}
            />
          )}
        </div>

        <div className="workflow-status-logs glass-card">
          <div className="log-header">WORKFLOW LIVE LOGS</div>
          <div className="log-screen">
            {logs.map((log, i) => (
              <span key={i} className={`log-line ${activeStep === 5 && i === logs.length - 1 ? 'success' : 'info'}`}>
                {log}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automation;
