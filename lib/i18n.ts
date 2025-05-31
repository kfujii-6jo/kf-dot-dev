export type Language = 'en' | 'ja';

export const languages = {
  en: 'English',
  ja: '日本語'
} as const;

export const defaultLanguage: Language = 'en';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact'
    },
    hero: {
      productName: "Kaisei",
      greeting: "'s playground",
      description: 'A passionate developer building amazing digital experiences',
      contact: 'Get in Touch',
      viewProjects: 'View Projects'
    },
    about: {
      title: 'About Me',
      subtitle: 'Get to know more about me, my background, and what I do',
      career: 'Career',
      education: 'Education',
      downloadResume: 'Download Resume'
    },
    skills: {
      title: 'My Skills',
      subtitle: 'A comprehensive overview of my technical expertise and proficiency levels',
      categories: {
        frontend: 'Frontend Development',
        backend: 'Backend Development',
        devops: 'DevOps',
        other: 'Other Skills'
      }
    },
    projects: {
      title: 'My Projects',
      subtitle: 'A showcase of my work, side projects, and open source contributions',
      viewDetails: 'View Details',
      viewAll: 'View All Projects',
      categories: {
        all: 'All Projects',
        web: 'Web Apps',
        mobile: 'Mobile Apps',
        other: 'Other Projects'
      }
    },
    blog: {
      title: 'My Blog',
      subtitle: 'Articles, tutorials, and thoughts about development and design',
      readArticle: 'Read Article',
      viewAll: 'View All Posts',
      searchPlaceholder: 'Search articles...',
      categories: 'Categories',
      technologies: 'Technologies',
      showMore: 'Show ${count} More...',
      showLess: 'Show Less'
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Have a question or want to work together? Feel free to contact me!',
      location: 'Location',
      email: 'Email',
      phone: 'Phone',
      connectWithMe: 'Connect With Me',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        subject: 'Subject',
        message: 'Your Message',
        sending: 'Sending...',
        send: 'Send Message'
      }
    }
  },
  ja: {
    nav: {
      home: 'ホーム',
      about: '私について',
      skills: 'スキル',
      projects: 'プロジェクト',
      blog: 'ブログ',
      contact: 'お問い合わせ'
    },
    hero: {
      productName: "かいかい",
      greeting: "の遊び場",
      description: '情熱的な開発者として、素晴らしいデジタル体験を創造しています',
      contact: 'お問い合わせ',
      viewProjects: 'プロジェクトを見る'
    },
    about: {
      title: '私について',
      subtitle: '私の経歴や仕事について詳しく知ってください',
      career: '経歴',
      education: '学歴',
      downloadResume: '履歴書をダウンロード'
    },
    skills: {
      title: 'スキル',
      subtitle: '技術的な専門知識と習熟度の包括的な概要',
      categories: {
        frontend: 'フロントエンド開発',
        backend: 'バックエンド開発',
        devops: 'DevOps',
        other: 'その他のスキル'
      }
    },
    projects: {
      title: 'プロジェクト',
      subtitle: '私の作品、個人プロジェクト、オープンソースへの貢献',
      viewDetails: '詳細を見る',
      viewAll: 'すべてのプロジェクトを見る',
      categories: {
        all: 'すべて',
        web: 'Webアプリ',
        mobile: 'モバイルアプリ',
        other: 'その他'
      }
    },
    blog: {
      title: 'ブログ',
      subtitle: '開発とデザインに関する記事、チュートリアル、考察',
      readArticle: '記事を読む',
      viewAll: 'すべての記事を見る',
      searchPlaceholder: '記事を検索...',
      categories: 'カテゴリー',
      technologies: '技術',
      showMore: '他${count}件を表示',
      showLess: '閉じる'
    },
    contact: {
      title: 'お問い合わせ',
      subtitle: 'ご質問やお仕事のご依頼など、お気軽にご連絡ください',
      location: '所在地',
      email: 'メールアドレス',
      phone: '電話番号',
      connectWithMe: 'SNSでつながる',
      form: {
        name: 'お名前',
        email: 'メールアドレス',
        subject: '件名',
        message: 'メッセージ',
        sending: '送信中...',
        send: 'メッセージを送信'
      }
    }
  }
} as const;