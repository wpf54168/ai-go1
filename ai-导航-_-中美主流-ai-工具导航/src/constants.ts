export interface AITool {
  id: string;
  name: string;
  company: string; // Bilingual: "Name (English Name)"
  country: 'China' | 'USA';
  url: string;
  modelTypes: string[];
  functions: string[];
  description: string;
  icon?: string;
}

export const AI_TOOLS: AITool[] = [
  // --- USA / Global ---
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    company: 'OpenAI (OpenAI)',
    country: 'USA',
    url: 'https://chat.openai.com',
    modelTypes: ['语言模型', '多模态模型'],
    functions: ['对话', '写作', '代码', '搜索', '图像'],
    description: '全球领先的 AI 助手，GPT-4o 具备极强的多模态理解与生成能力。'
  },
  {
    id: 'claude',
    name: 'Claude 3.5',
    company: 'Anthropic (Anthropic)',
    country: 'USA',
    url: 'https://claude.ai',
    modelTypes: ['语言模型', '多模态模型'],
    functions: ['对话', '写作', '代码', '长文本分析'],
    description: '以逻辑推理和自然表达著称，Claude 3.5 Sonnet 是目前最顶尖的模型之一。'
  },
  {
    id: 'gemini',
    name: 'Gemini 1.5 Pro',
    company: '谷歌 (Google)',
    country: 'USA',
    url: 'https://gemini.google.com',
    modelTypes: ['语言模型', '多模态模型'],
    functions: ['对话', '搜索', '多模态', '办公', '代码'],
    description: 'Google 原生多模态大模型，支持百万级超长上下文。'
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    company: 'Perplexity (Perplexity AI)',
    country: 'USA',
    url: 'https://www.perplexity.ai',
    modelTypes: ['语言模型'],
    functions: ['搜索', '对话'],
    description: 'AI 搜索领域的领跑者，提供带引用的实时信息检索。'
  },
  {
    id: 'grok',
    name: 'Grok-2',
    company: 'xAI (xAI)',
    country: 'USA',
    url: 'https://x.ai',
    modelTypes: ['语言模型', '多模态模型'],
    functions: ['对话', '实时信息', '图像生成'],
    description: '马斯克旗下 AI 公司产品，集成 X 平台实时数据，风格幽默。'
  },
  {
    id: 'midjourney',
    name: 'Midjourney v6',
    company: 'Midjourney (Midjourney)',
    country: 'USA',
    url: 'https://www.midjourney.com',
    modelTypes: ['图像生成'],
    functions: ['图像', '艺术设计'],
    description: 'AI 绘画界的标杆，光影与艺术表现力极强。'
  },
  {
    id: 'flux',
    name: 'Flux.1',
    company: '黑森林实验室 (Black Forest Labs)',
    country: 'USA',
    url: 'https://blackforestlabs.ai',
    modelTypes: ['图像生成'],
    functions: ['图像'],
    description: '由原 SD 核心团队打造，写实能力与文字渲染能力惊人。'
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    company: 'Stability AI (Stability AI)',
    country: 'USA',
    url: 'https://stability.ai',
    modelTypes: ['图像生成', '视频生成'],
    functions: ['图像', '视频', '开源生态'],
    description: '全球最流行的开源图像生成模型生态。'
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    company: '奥多比 (Adobe)',
    country: 'USA',
    url: 'https://www.adobe.com/ai/firefly',
    modelTypes: ['图像生成', '多模态模型'],
    functions: ['图像', '设计', '创意办公'],
    description: '集成于 Photoshop 等软件，商业版权安全的 AI 创作工具。'
  },
  {
    id: 'sora',
    name: 'Sora',
    company: 'OpenAI (OpenAI)',
    country: 'USA',
    url: 'https://openai.com/sora',
    modelTypes: ['视频生成'],
    functions: ['视频'],
    description: 'OpenAI 发布的颠覆性视频生成模型，支持 60 秒长视频。'
  },
  {
    id: 'runway-gen3',
    name: 'Runway Gen-3 Alpha',
    company: 'Runway (Runway)',
    country: 'USA',
    url: 'https://runwayml.com',
    modelTypes: ['视频生成', '图像生成'],
    functions: ['视频', '创意设计', '视频编辑'],
    description: '电影级 AI 视频生成平台，支持精细的运动控制。'
  },
  {
    id: 'pika',
    name: 'Pika 1.5',
    company: 'Pika Labs (Pika Labs)',
    country: 'USA',
    url: 'https://pika.art',
    modelTypes: ['视频生成'],
    functions: ['视频', '动画'],
    description: '支持物理特效（压扁、融化等）的趣味性视频生成工具。'
  },
  {
    id: 'luma-dream',
    name: 'Luma Dream Machine',
    company: 'Luma AI (Luma AI)',
    country: 'USA',
    url: 'https://lumalabs.ai/dream-machine',
    modelTypes: ['视频生成'],
    functions: ['视频'],
    description: '极速生成高质量、高一致性的 3D 感视频。'
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    company: 'HeyGen (HeyGen)',
    country: 'USA',
    url: 'https://www.heygen.com',
    modelTypes: ['视频生成', '多模态模型'],
    functions: ['视频', '数字人', '翻译'],
    description: '全球领先的 AI 数字人视频生成平台。'
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    company: 'ElevenLabs (ElevenLabs)',
    country: 'USA',
    url: 'https://elevenlabs.io',
    modelTypes: ['音频/音乐'],
    functions: ['配音', '语音克隆', '音频'],
    description: '最真实的 AI 语音合成与克隆技术。'
  },
  {
    id: 'suno-v3',
    name: 'Suno v3.5',
    company: 'Suno (Suno AI)',
    country: 'USA',
    url: 'https://suno.com',
    modelTypes: ['音频/音乐'],
    functions: ['音乐'],
    description: '只需文字即可生成完整词曲唱的 AI 音乐创作神器。'
  },
  {
    id: 'udio-music',
    name: 'Udio',
    company: 'Udio (Udio)',
    country: 'USA',
    url: 'https://www.udio.com',
    modelTypes: ['音频/音乐'],
    functions: ['音乐'],
    description: '音质极佳的 AI 音乐生成工具，深受音乐人喜爱。'
  },
  {
    id: 'cursor-editor',
    name: 'Cursor',
    company: 'Anysphere (Anysphere)',
    country: 'USA',
    url: 'https://www.cursor.com',
    modelTypes: ['代码模型', '多模态模型'],
    functions: ['代码', '编程助手'],
    description: 'AI 驱动的代码编辑器，支持全库索引与智能补全。'
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    company: '微软 (Microsoft/GitHub)',
    country: 'USA',
    url: 'https://github.com/features/copilot',
    modelTypes: ['代码模型'],
    functions: ['代码'],
    description: '开发者必备的 AI 编程助手，支持多种 IDE。'
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    company: 'Notion (Notion)',
    country: 'USA',
    url: 'https://www.notion.so/product/ai',
    modelTypes: ['语言模型'],
    functions: ['写作', '办公', '整理'],
    description: '集成在笔记软件中的 AI，支持写作增强与知识库问答。'
  },

  // --- China ---
  {
    id: 'deepseek-v3',
    name: 'DeepSeek V3',
    company: '深度求索 (DeepSeek)',
    country: 'China',
    url: 'https://www.deepseek.com',
    modelTypes: ['语言模型', '代码模型', '多模态模型'],
    functions: ['对话', '代码', '推理', '数学'],
    description: '国产模型之光，推理能力极强，开源社区评价极高。'
  },
  {
    id: 'doubao-app',
    name: '豆包',
    company: '字节跳动 (ByteDance)',
    country: 'China',
    url: 'https://www.doubao.com',
    modelTypes: ['语言模型', '多模态模型', '视频生成'],
    functions: ['对话', '写作', '搜索', '生活助手', '语音'],
    description: '字节跳动核心 AI 应用，支持极速语音交互与智能体。'
  },
  {
    id: 'kling-ai',
    name: '可灵 (Kling)',
    company: '快手 (Kuaishou)',
    country: 'China',
    url: 'https://klingai.kwai.com',
    modelTypes: ['视频生成', '图像生成'],
    functions: ['视频', '图像'],
    description: '国产最强视频生成模型，支持 2 分钟长视频生成。'
  },
  {
    id: 'kimi-moonshot',
    name: 'Kimi 智能助手',
    company: '月之暗面 (Moonshot AI)',
    country: 'China',
    url: 'https://kimi.moonshot.cn',
    modelTypes: ['语言模型', '多模态模型'],
    functions: ['长文本分析', '对话', '搜索', '办公'],
    description: '首创长文本处理，支持数百万字上下文，分析文档神器。'
  },
  {
    id: 'qwen-max',
    name: '通义千问 2.5',
    company: '阿里巴巴 (Alibaba)',
    country: 'China',
    url: 'https://tongyi.aliyun.com',
    modelTypes: ['语言模型', '多模态模型', '代码模型', '音频/音乐'],
    functions: ['对话', '写作', '办公', '代码', '翻译'],
    description: '阿里全能型大模型，开源 Qwen 系列在全球排名领先。'
  },
  {
    id: 'zhipu-qingyan',
    name: '智谱清言',
    company: '智谱AI (Zhipu AI)',
    country: 'China',
    url: 'https://chatglm.cn',
    modelTypes: ['语言模型', '多模态模型', '视频生成', '代码模型'],
    functions: ['对话', '写作', '代码', '视频', '科研'],
    description: '源自清华，全自研 GLM 架构，具备强大的视频生成与 Agent 能力。'
  },
  {
    id: 'hunyuan-yuanbao',
    name: '腾讯元宝',
    company: '腾讯 (Tencent)',
    country: 'China',
    url: 'https://yuanbao.tencent.com',
    modelTypes: ['语言模型', '多模态模型'],
    functions: ['对话', '搜索', '办公', '微信生态'],
    description: '腾讯官方 AI 应用，深度集成微信公众号与视频号内容搜索。'
  },
  {
    id: 'ernie-bot',
    name: '文心一言',
    company: '百度 (Baidu)',
    country: 'China',
    url: 'https://yiyan.baidu.com',
    modelTypes: ['语言模型', '多模态模型'],
    functions: ['对话', '搜索', '写作', '办公'],
    description: '百度推出的知识增强大模型，国内生态集成度最高。'
  },
  {
    id: 'hailuo-minimax',
    name: '海螺 AI',
    company: 'MiniMax (MiniMax)',
    country: 'China',
    url: 'https://hailuoai.com',
    modelTypes: ['语言模型', '视频生成', '音频/音乐'],
    functions: ['对话', '视频', '语音交互'],
    description: 'MiniMax 旗下产品，视频生成效果惊艳，语音极其自然。'
  },
  {
    id: 'vidu-video',
    name: 'Vidu',
    company: '生数科技 (Shengshu)',
    country: 'China',
    url: 'https://www.vidu.vision',
    modelTypes: ['视频生成'],
    functions: ['视频'],
    description: '清华系团队打造，国产首个长时长、高一致性视频大模型。'
  },
  {
    id: 'dreamina-byte',
    name: '即梦 (Dreamina)',
    company: '字节跳动 (ByteDance)',
    country: 'China',
    url: 'https://jimeng.pico-interactive.com',
    modelTypes: ['图像生成', '视频生成'],
    functions: ['图像', '视频', '设计'],
    description: '字节跳动旗下的专业级 AI 创作平台。'
  },
  {
    id: 'yi-01',
    name: '万物一言 (Yi)',
    company: '零一万物 (01.AI)',
    country: 'China',
    url: 'https://www.yispace.com',
    modelTypes: ['语言模型', '多模态模型'],
    functions: ['对话', '写作', '办公'],
    description: '李开复创办，Yi 系列模型在多项榜单中位列国产第一。'
  },
  {
    id: 'xinghuo-iflytek',
    name: '讯飞星火',
    company: '科大讯飞 (iFLYTEK)',
    country: 'China',
    url: 'https://xinghuo.xfyun.cn',
    modelTypes: ['语言模型', '多模态模型'],
    functions: ['对话', '办公', '教育', '语音'],
    description: '结合讯飞领先的语音技术，在办公和教育场景表现极佳。'
  },
  {
    id: 'stepfun-ai',
    name: '跃问 (StepChat)',
    company: '阶跃星辰 (StepFun)',
    country: 'China',
    url: 'https://www.stepchat.cn',
    modelTypes: ['语言模型', '多模态模型'],
    functions: ['对话', '长文本', '搜索'],
    description: '专注于万亿参数模型，多模态理解能力处于国内顶尖水平。'
  },
  {
    id: 'tiangong-kunlun',
    name: '天工 AI',
    company: '昆仑万维 (Kunlun Tech)',
    country: 'China',
    url: 'https://www.tiangong.cn',
    modelTypes: ['语言模型', '音频/音乐', '搜索'],
    functions: ['搜索', '对话', '音乐'],
    description: '国内首个集搜索、对话、音乐生成于一体的 AI 平台。'
  },
  {
    id: 'coze-byte',
    name: '扣子 (Coze)',
    company: '字节跳动 (ByteDance)',
    country: 'China',
    url: 'https://www.coze.cn',
    modelTypes: ['语言模型', '多模态模型'],
    functions: ['Agent开发', '工作流', '插件'],
    description: '零代码 AI 应用开发平台，可快速发布 Bot 到微信、飞书。'
  },
  {
    id: 'wps-ai',
    name: 'WPS AI',
    company: '金山办公 (Kingsoft)',
    country: 'China',
    url: 'https://ai.wps.cn',
    modelTypes: ['语言模型'],
    functions: ['办公', '写作', 'PPT生成'],
    description: '深度集成于 WPS Office，大幅提升文档处理效率。'
  },
  {
    id: 'liblib-ai',
    name: 'Liblib AI',
    company: '哩布哩布 (Liblib)',
    country: 'China',
    url: 'https://www.liblib.art',
    modelTypes: ['图像生成'],
    functions: ['图像', '模型社区'],
    description: '中国领先的 AI 图像生成平台与模型分享社区。'
  },
  {
    id: 'pixverse-video',
    name: 'PixVerse',
    company: '爱诗科技 (PixVerse)',
    country: 'China',
    url: 'https://pixverse.ai',
    modelTypes: ['视频生成'],
    functions: ['视频', '动画'],
    description: '国产出海视频生成佼佼者，支持 4K 高清视频生成。'
  },
  {
    id: 'morph-studio',
    name: 'Morph Studio',
    company: 'Morph Studio (Morph Studio)',
    country: 'USA',
    url: 'https://www.morphstudio.com',
    modelTypes: ['视频生成'],
    functions: ['视频', '工作流'],
    description: '基于故事板的 AI 视频创作平台，支持长视频叙事。'
  },
  {
    id: 'recraft-ai',
    name: 'Recraft',
    company: 'Recraft (Recraft)',
    country: 'USA',
    url: 'https://www.recraft.ai',
    modelTypes: ['图像生成'],
    functions: ['图像', '矢量图', '设计'],
    description: '专业的 AI 矢量图与插画设计工具。'
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo.ai',
    company: 'Leonardo (Leonardo.ai)',
    country: 'USA',
    url: 'https://leonardo.ai',
    modelTypes: ['图像生成', '视频生成'],
    functions: ['图像', '视频', '艺术设计'],
    description: '功能极其丰富的 AI 创作平台，支持实时绘画与视频生成。'
  },
  {
    id: 'cogvideo-zhipu',
    name: 'CogVideoX',
    company: '智谱AI (Zhipu AI)',
    country: 'China',
    url: 'https://github.com/THUDM/CogVideo',
    modelTypes: ['视频生成'],
    functions: ['视频', '开源生态'],
    description: '智谱 AI 开源的顶级视频生成模型，性能卓越。'
  },
  {
    id: 'fish-speech',
    name: 'Fish Speech',
    company: '鱼声科技 (Fish Audio)',
    country: 'China',
    url: 'https://fish.audio',
    modelTypes: ['音频/音乐'],
    functions: ['配音', '语音克隆', '开源生态'],
    description: '国产领先的开源语音克隆与合成模型。'
  }
];
