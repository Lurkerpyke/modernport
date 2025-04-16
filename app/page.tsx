'use client'

import React from 'react';
import { AuroraBackgroundDemo } from '@/components/Hero';
import { SkillsSection } from '@/components/SkillsSections';
import { Projects } from '@/components/Projects';
import { TimelineDemo } from '@/components/TimelineDemo';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <AuroraBackgroundDemo />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Showcase */}
      <Projects />

      {/* Timeline */}
      <TimelineDemo />
    </div>
  )
}
