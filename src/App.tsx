import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  Globe, 
  Building2, 
  Layers, 
  Wrench, 
  ExternalLink, 
  Github,
  ChevronRight,
  LayoutGrid,
  List,
  Sparkles,
  Zap,
  Cpu,
  Video,
  Music,
  Code,
  PenTool,
  MessageSquare,
  Search as SearchIcon,
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AI_TOOLS, AITool } from './constants';
import { Analytics } from '@vercel/analytics/react';

type ViewMode = 'company' | 'modelType' | 'function';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('function');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<'All' | 'China' | 'USA'>('All');

  // Initial scroll to "对话" if in function mode
  useEffect(() => {
    if (viewMode === 'function') {
      setTimeout(() => {
        scrollToSection('对话');
      }, 500);
    }
  }, []);

  const filteredTools = useMemo(() => {
    return AI_TOOLS.filter(tool => {
      const matchesSearch = 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCountry = selectedCountry === 'All' || tool.country === selectedCountry;
      
      return matchesSearch && matchesCountry;
    });
  }, [searchQuery, selectedCountry]);

  const groupedTools = useMemo<Record<string, AITool[]>>(() => {
    if (viewMode === 'company') {
      const groups: Record<string, AITool[]> = {};
      filteredTools.forEach(tool => {
        if (!groups[tool.company]) groups[tool.company] = [];
        groups[tool.company].push(tool);
      });
      return groups;
    } else if (viewMode === 'modelType') {
      const groups: Record<string, AITool[]> = {};
      // Prioritize certain model types
      const priorityTypes = ['多模态模型', '视频生成', '语言模型', '图像生成'];
      priorityTypes.forEach(type => {
        groups[type] = [];
      });

      filteredTools.forEach(tool => {
        tool.modelTypes.forEach(type => {
          if (!groups[type]) groups[type] = [];
          groups[type].push(tool);
        });
      });
      
      // Remove empty priority groups if no tools match
      Object.keys(groups).forEach(key => {
        if (groups[key].length === 0) delete groups[key];
      });
      
      return groups;
    } else {
      const groups: Record<string, AITool[]> = {};
      // Prioritize certain functions
      const priorityFunctions = ['对话', '视频', '多模态', '搜索', '图像', '代码'];
      priorityFunctions.forEach(func => {
        groups[func] = [];
      });
      
      filteredTools.forEach(tool => {
        tool.functions.forEach(func => {
          if (!groups[func]) groups[func] = [];
          groups[func].push(tool);
        });
      });

      // Remove empty priority groups
      Object.keys(groups).forEach(key => {
        if (groups[key].length === 0) delete groups[key];
      });

      return groups;
    }
  }, [filteredTools, viewMode]);

  const getIconForGroup = (name: string) => {
    const iconClass = "w-5 h-5";
    switch (name) {
      // 模型类型
      case '语言模型': return <MessageSquare className={iconClass} />;
      case '多模态模型': return <Layers className={iconClass} />;
      case '图像生成': return <PenTool className={iconClass} />;
      case '视频生成': return <Video className={iconClass} />;
      case '音频/音乐': return <Music className={iconClass} />;
      case '代码模型': return <Code className={iconClass} />;
      
      // 功能分类
      case '对话': return <MessageSquare className={iconClass} />;
      case '写作': return <PenTool className={iconClass} />;
      case '代码': return <Code className={iconClass} />;
      case '搜索': return <SearchIcon className={iconClass} />;
      case '视频': return <Video className={iconClass} />;
      case '图像': return <PenTool className={iconClass} />;
      case '音乐': return <Music className={iconClass} />;
      case '办公': return <Briefcase className={iconClass} />;
      case '长文本分析': return <LayoutGrid className={iconClass} />;
      case '推理': return <Cpu className={iconClass} />;
      case '数学': return <Cpu className={iconClass} />;
      case '生活助手': return <Sparkles className={iconClass} />;
      case '语音': return <Music className={iconClass} />;
      case '科研': return <SearchIcon className={iconClass} />;
      case '设计': return <PenTool className={iconClass} />;
      case '教育': return <Briefcase className={iconClass} />;
      case 'Agent开发': return <Wrench className={iconClass} />;
      case '工作流': return <Layers className={iconClass} />;
      case '翻译': return <Globe className={iconClass} />;
      case '配音': return <Music className={iconClass} />;
      case '数字人': return <Video className={iconClass} />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 hidden sm:block">
                AI 导航站
              </h1>
            </div>

            <div className="flex-1 max-w-md mx-4 sm:mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索 AI 工具、公司或功能..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 border-transparent focus:bg-white focus:ring-2 focus:ring-indigo-500 rounded-full text-sm transition-all outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              {/* View Mode Switcher in Header */}
              <div className="hidden md:flex bg-gray-100 p-1 rounded-lg text-xs font-medium">
                <button
                  onClick={() => setViewMode('company')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    viewMode === 'company' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  按公司
                </button>
                <button
                  onClick={() => setViewMode('modelType')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    viewMode === 'modelType' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  按模型
                </button>
                <button
                  onClick={() => setViewMode('function')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    viewMode === 'function' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  按功能
                </button>
              </div>

              <div className="flex bg-gray-100 p-1 rounded-lg text-xs font-medium">
                {(['All', 'China', 'USA'] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCountry(c)}
                    className={`px-2 sm:px-3 py-1.5 rounded-md transition-all ${
                      selectedCountry === c 
                        ? 'bg-white text-indigo-600 shadow-sm' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {c === 'All' ? '全部' : c === 'China' ? '中国' : '美国'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4 px-2">
                  <LayoutGrid className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-bold text-gray-900">分类导航</span>
                </div>
                <nav className="space-y-1 max-h-[calc(100vh-250px)] overflow-y-auto pr-2 custom-scrollbar">
                  {Object.keys(groupedTools).map((groupName) => (
                    <button
                      key={groupName}
                      onClick={() => scrollToSection(groupName)}
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all text-left group"
                    >
                      <span className="opacity-50 group-hover:opacity-100 transition-opacity">
                        {getIconForGroup(groupName)}
                      </span>
                      <span className="truncate">{groupName}</span>
                      <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </button>
                  ))}
                  {Object.keys(groupedTools).length === 0 && (
                    <p className="text-xs text-gray-400 px-3 py-2 italic">暂无分类</p>
                  )}
                </nav>
              </div>

              {/* Quick View Switcher in Sidebar for Mobile/Small Screens */}
              <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm lg:hidden">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setViewMode('company')}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      viewMode === 'company' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    <Building2 className="w-3 h-3" />
                    公司
                  </button>
                  <button
                    onClick={() => setViewMode('modelType')}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      viewMode === 'modelType' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    <Layers className="w-3 h-3" />
                    模型
                  </button>
                  <button
                    onClick={() => setViewMode('function')}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      viewMode === 'function' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    <Wrench className="w-3 h-3" />
                    功能
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Page Title */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">探索 AI 世界</h2>
              <p className="text-gray-500">中美主流 AI 工具一站式导航</p>
            </div>

            {/* Content List */}
            <div className="space-y-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={viewMode + searchQuery + selectedCountry}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {Object.keys(groupedTools).length > 0 ? (
                (Object.entries(groupedTools) as [string, AITool[]][]).map(([groupName, tools]) => (
                  <section id={groupName} key={groupName} className="mb-12 scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100 text-indigo-600">
                        {getIconForGroup(groupName)}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{groupName}</h3>
                      <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent ml-4"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                      {tools.map((tool) => (
                        <a
                          key={tool.id + groupName}
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 flex flex-col h-full"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                <Cpu className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                  {tool.name}
                                </h4>
                                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tight">{tool.company}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                                tool.country === 'China' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
                              }`}>
                                {tool.country === 'China' ? 'CN' : 'US'}
                              </span>
                              <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-indigo-400 transition-colors" />
                            </div>
                          </div>
                          
                          <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
                            {tool.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-1.5 mt-auto">
                            {tool.functions.slice(0, 3).map(f => (
                              <span key={f} className="text-[10px] bg-gray-50 text-gray-500 px-2 py-0.5 rounded-md">
                                {f}
                              </span>
                            ))}
                            {tool.functions.length > 3 && (
                              <span className="text-[10px] text-gray-400 px-1 py-0.5">
                                +{tool.functions.length - 3}
                              </span>
                            )}
                          </div>
                        </a>
                      ))}
                    </div>
                  </section>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                  <SearchIcon className="w-12 h-12 mb-4 opacity-20" />
                  <p className="text-lg">未找到匹配的 AI 工具</p>
                  <button 
                    onClick={() => {setSearchQuery(''); setSelectedCountry('All');}}
                    className="mt-4 text-indigo-600 hover:underline text-sm"
                  >
                    清除所有筛选
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-indigo-600" />
              <span className="font-bold text-gray-900">AI 导航站</span>
            </div>
            
            <div className="flex gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-indigo-600 transition-colors">关于我们</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">提交工具</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">隐私政策</a>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://github.com" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} AI 导航站. 汇集全球顶尖 AI 生产力工具.
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}
