// ============================================================
// lp-content.ts
// ハヤパス LP の全テキスト・URL定数ファイル
// ============================================================

export const content = {
  // ----------------------------------------------------------
  // Hero Section
  // ----------------------------------------------------------
  hero: {
    bullets: [
      "QRを置くだけで即日スタート",
      "初期費用・月額費用 完全ゼロ",
      "完全成果報酬・リスクなし",
      "申し込みから最短3日",
    ],
    tagline1: "行列は、",
    tagline2: "もう収益です。",
    subtitle: "QRコードを置くだけ。初期費用ゼロ・完全成果報酬で待ち時間が毎月の収益になる",
    serviceType: "店舗向けファストパスサービス",
    ctaButton: "無料で資料をダウンロード",
    trialButton: "無料で資料をダウンロード",
  },

  // ----------------------------------------------------------
  // Stats Section (3 circular cards)
  // ----------------------------------------------------------
  stats: {
    monthlyUsage: {
      label: "月間最大利用件数",
      value: "300",
      unit: "件",
      note: "達成例",
    },
    monthlyRevenue: {
      label: "月間収益達成例",
      value: "22",
      unit: "万円",
    },
    paymentTypes: {
      label: "導入までの日数",
      value: "3",
      unit: "日",
      note: "最短",
    },
  },

  // ----------------------------------------------------------
  // Category Tags (shared across success case cards)
  // ----------------------------------------------------------
  categories: {
    restaurant: "飲食店",
    ramen: "ラーメン店",
    orthopedics: "整骨院",
    cafe: "カフェ",
    beautyShop: "スイーツ店",
    yakiniku: "焼肉店",
    bakery: "ベーカリー",
    breadShop: "パン屋",
  },

  // ----------------------------------------------------------
  // Company Logos / Adoption Section
  // ----------------------------------------------------------
  companyAdoption: {
    stat: "飲食店・整骨院・カフェなど",
    statNumber: "幅広い",
    statUnit: "業種で",
    statSuffix: "ハヤパスが選ばれています",
  },

  // ----------------------------------------------------------
  // Success Cases Section (24 slots — DivPage.tsx accesses [0]-[23] unconditionally)
  // [0]-[9]: 実店舗事例、[10]-[23]: STEP2で非表示化するまでの循環コピー
  // ----------------------------------------------------------
  successCases: {
    sectionTitle: "ハヤパス導入事例",
    sectionDesc: ["飲食店・整骨院・カフェなど", "幅広い業種でご利用いただいています。"],
    readMoreLink: "詳しく見る",
    viewAllButton: "その他の導入事例を見る",
    cases: [
      // [0] kankyosyo — DivPage: title[0-2], description[0-2]
      {
        slug: "kankyosyo",
        categories: ["飲食店", "ラーメン店"],
        href: "/case/kankyosyo",
        title: ["渋谷ラーメン龍王", "月180件の利用で+18万円。", "行列が毎月の安定収益に変わった"],
        description: [
          "週末の待ち時間は平均45分。QRを見た",
          "お客様が自発的に購入してくれる。",
          "スタッフは何もせず、月18万円の副収益。",
        ],
      },
      // [1] elj — DivPage: title[0-2], description[0-2]
      {
        slug: "elj",
        categories: ["整骨院"],
        href: "/case/elj",
        title: ["代々木はり・きゅう整骨院", "月+12万円の収益とともに", "口コミ評価も同時に上がった"],
        description: [
          "「待つなら払う」という患者が増え、",
          "クレームが減り口コミ評価も向上。",
          "月12万円の追加収益も生まれた。",
        ],
      },
      // [2] gcenergy — DivPage: title[0-2], description[0-2]
      {
        slug: "gcenergy",
        categories: ["カフェ", "飲食店"],
        href: "/case/gcenergy",
        title: ["表参道 SLOW COFFEE", "月+8万円より、客層が広がったことが", "一番の成果になった"],
        description: [
          "時間を大切にするお客様にも来てもらえる",
          "ように。収益アップだけでなく、",
          "ブランドイメージも向上した。",
        ],
      },
      // [3] kyoshinkk — DivPage: title[0-2], description[0-1]
      {
        slug: "kyoshinkk",
        categories: ["飲食店", "焼肉店"],
        href: "/case/kyoshinkk",
        title: ["新宿 焼肉 炎城", "月200件以上で+25万円。", "土日の行列が客単価アップに直結"],
        description: [
          "1,250円のファストパスが月200件以上。",
          "それだけで月25万円の収益になっている。",
        ],
      },
      // [4] ginowandensetsu — DivPage: title[0-2], description[0-2]
      {
        slug: "ginowandensetsu",
        categories: ["クリニック"],
        href: "/case/ginowandensetsu",
        title: ["吉祥寺デンタルクリニック", "「時間を買える」が受け入れられた。", "月+10万円の新収益"],
        description: [
          "昼休みに駆け込む会社員に好評。",
          "「待てないが診てもらいたい」患者に",
          "ファストパスが刺さった。",
        ],
      },
      // [5] solarworld — DivPage: title[0-1], description[0-2]
      {
        slug: "solarworld",
        categories: ["飲食店"],
        href: "/case/solarworld",
        title: ["鎌倉 くずきり 月乃", "インバウンド客にも好評。観光地の行列が月+15万円に"],
        description: [
          "外国人観光客が「キャッシュレスで並ばず",
          "入れる」と喜ぶ。QRを読むだけの",
          "シンプルさがインバウンド対応にも最適。",
        ],
      },
      // [6] anker — DivPage: title[0-1], description[0-3]
      {
        slug: "anker",
        categories: ["整骨院"],
        href: "/case/anker",
        title: ["接骨院（埼玉・院長）", "夕方ピーク時の待ち時間が月+8万円に"],
        description: [
          "仕事帰りの患者で混雑する時間帯に設定。",
          "待てずに帰るお客様が減少。",
          "月間約8万円の追加収益。",
          "月間約110件利用。",
        ],
      },
      // [7] xsol — DivPage: title[0-2], description[0-3]
      {
        slug: "xsol",
        categories: ["ベーカリー", "パン屋"],
        href: "/case/xsol",
        title: ["人気ベーカリー（兵庫）", "月190件・+14万円。朝の行列が", "毎月の安定収益になった"],
        description: [
          "焼きたてパンの行列で待てずに帰る方が",
          "いたが、ハヤパス導入で離脱が減少。",
          "お客様の満足度も向上。",
          "月間190件利用。",
        ],
      },
      // [8] panasonic — DivPage: title[0-2], description[0-2]
      {
        slug: "panasonic",
        categories: ["飲食店"],
        href: "/case/panasonic",
        title: ["タピオカ専門店（渋谷・オーナー）", "週末は30分待ちも当たり前の人気店", "ハヤパスで月間約18万円の収益"],
        description: [
          "若い世代を中心に大人気。行列が長すぎて",
          "諦める方も多かったが、ハヤパスで",
          "売上機会損失を削減。月間約240件利用。",
        ],
      },
      // [9] itsuki — DivPage: title[0-3], description[0-2]
      {
        slug: "itsuki",
        categories: ["飲食店"],
        href: "/case/itsuki",
        title: [
          "スイーツ専門店（京都・オーナー）",
          "観光客で賑わう人気店。ハヤパス導入で",
          "待ち時間が収益に変わり、",
          "月間約13万円の追加収入",
        ],
        description: [
          "SNSで話題になり平日でも行列。待ち時間",
          "がストレスだったが、ハヤパスで解決。",
          "月間約170件利用。",
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // Demo Section
  // ----------------------------------------------------------
  demo: {
    heading: "ハヤパスの仕組みを確認してみましょう",
  },

  // ----------------------------------------------------------
  // About Section ("ハヤパスとは？")
  // ----------------------------------------------------------
  about: {
    sectionTitle: "ハヤパスとは？",
    description: [
      "QRコードを店頭に置くだけで、",
      "お客様が自分でファストパスを購入・利用できるサービスです。",
      "アプリ不要・システム不要・スタッフ研修不要。",
      "売上は翌月20日に自動振込。",
    ],
    steps: [
      {
        number: "01",
        title: "QRコードを店頭に置く",
        description: "届いたQRコードパネルを目立つ場所に設置するだけ。それだけで準備完了。",
      },
      {
        number: "02",
        title: "お客様がスマホでスキャン・購入",
        description: "お客様がスマホでQRをスキャンし、ファストパスを自分で購入。スタッフの対応は一切不要。",
      },
      {
        number: "03",
        title: "ファストパス購入者を優先入店",
        description: "購入者を優先案内。通常の行列はそのまま残ります。既存のお客様への影響はありません。",
      },
      {
        number: "04",
        title: "売上は翌月に自動振込",
        description: "毎月20日に指定口座へ自動振込。ダッシュボードでリアルタイムに売上を確認できます。",
      },
    ],
    noRequirements: ["アプリ不要", "システム不要", "スタッフ研修不要"],
  },

  // ----------------------------------------------------------
  // Pain Points Section ("こんなお悩みありませんか？")
  // ----------------------------------------------------------
  painPoints: {
    sectionTitle: "こんなお悩みありませんか？",
    cards: [
      "行列があるのに、その時間が1円にもなっていない",
      "「待てない」と帰るお客様を引き止める手段がない",
      "新しいシステムを入れると、スタッフの負担が増えそうで怖い",
    ],
  },

  // ----------------------------------------------------------
  // Features Section ("選ばれる3つの理由")
  // ----------------------------------------------------------
  features: {
    sectionTitle: "ハヤパスが選ばれる3つの理由",
    cards: [
      {
        number: "01",
        title: "リスクゼロで始められる",
        description: [
          "初期費用ゼロ・月額費用ゼロの完全成果報酬型。",
          "ファストパスが売れなければ費用は0円。",
          "売れた分だけ収益が入る、リスクのない仕組みです。",
        ],
      },
      {
        number: "02",
        title: "あらゆる業種・業態に対応",
        description: [
          "飲食店・整骨院・クリニック・カフェ・",
          "スイーツ店・ベーカリーなど、",
          "「待ち時間が発生する業種」であれば導入できます。",
        ],
      },
      {
        number: "03",
        title: "現場の負担ゼロ",
        description: [
          "QRを置くだけ。スタッフへの研修は一切不要。",
          "クレーム対応マニュアル・案内フレーズ集が付属。",
          "万が一のトラブルにも安心してご対応いただけます。",
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // Industry Section (対応業種)
  // ----------------------------------------------------------
  industry: {
    description: "飲食店・整骨院・クリニック・カフェ・スイーツ店・ベーカリーなど、待ち時間が発生するあらゆる業種で導入できます。",
  },

  // ----------------------------------------------------------
  // Flow Section ("導入までの流れ")
  // ----------------------------------------------------------
  flow: {
    badge: "申し込みから最短3日でスタート！",
    sectionTitle: "導入までの流れ",
    description: [
      "たったの3ステップ。",
      "申し込みはWebから3分。QRが届いたら即日スタート。",
    ],
    steps: [
      {
        title: "Webフォームから申し込み",
        badge: "3分で完了",
        footnote: "※1",
        safetyNote: "フォーム入力だけで完了。電話・訪問は不要なので安心です。",
        bullets: [
          "Webフォームから店舗情報を入力（3分）",
          "振込先口座・本人確認書類をアップロード",
          "申し込み完了メールが届く",
        ],
      },
      {
        title: "審査・QRコード発送",
        badge: "最短翌営業日審査",
        footnote: "※2",
        safetyNote: "審査結果はメールでご連絡。QRコードは追跡番号付きで郵送します。",
        bullets: [
          "審査（最短翌営業日）",
          "承認後、QRコードパネルをヤマト便で発送",
          "追跡番号をメールでお知らせ",
        ],
      },
      {
        title: "QRを店頭に置いてスタート",
        badge: "即日収益化",
        safetyNote: "設置は1分。置いた日からファストパスの販売が始まります。",
        bullets: [
          "届いたQRコードパネルを店頭に置くだけ",
          "金額はスマホダッシュボードで1タップ切替",
          "売上は翌月20日に自動振込",
          "ダッシュボードでリアルタイムに売上確認",
        ],
      },
    ],
    footnotes: [
      "※1…Webフォームから3分で申し込み完了。電話・来店不要",
      "※2…審査は最短翌営業日。承認後すぐにQRコードを発送します",
    ],
  },

  // ----------------------------------------------------------
  // Support Section ("安心のサポート体制")
  // ----------------------------------------------------------
  support: {
    sectionTitle: "安心のサポート体制",
    description1: [
      "導入後も、メール・チャットで翌営業日以内にサポートします。",
      "クレーム対応から日常の使い方まで、どんな疑問にもお答えします。",
    ],
    description2: [
      "導入店舗向けに案内フレーズ集・クレーム対応マニュアル・",
      "卓上用案内カード（同梱）を無料でご提供しています。",
    ],
    supportItems: [
      "ハヤパス\n導入サポート",
      "クレーム対応\nマニュアル",
      "お客様案内\nフレーズ集",
      "卓上用案内\nカード",
    ],
    contactDescription: [
      "ご不明点はメール・チャットでお気軽にご連絡ください。",
      "翌営業日以内に担当者よりご回答いたします。",
    ],
    testimonialHeading: [
      "導入したオーナー様の声",
    ],
    testimonials: [
      {
        author: "東京都 ラーメン店オーナー",
        body: [
          "導入初日から売れました。週末は1時間待ちが当たり前なのに、今まで",
          "収益になっていなかったのが信じられない。QRを置いてから毎週末、",
          "ファストパス購入が続いています。スタッフは何もしていないのに、",
          "月15万円の収益が増えた感覚です。",
        ],
      },
      {
        author: "神奈川県 整骨院院長",
        body: [
          "患者さんが待合室で長時間待っていることへの申し訳なさがあったが、",
          "ファストパスを案内することで「早く呼んでもらえた」と喜ばれるように。",
          "収益にもなるし、患者満足度も上がる。こんな一石二鳥のサービスは初めてです。",
        ],
      },
      {
        author: "大阪府 カフェオーナー",
        body: [
          "お洒落なQRパネルが届いて、テーブルに置いただけ。説明書もわかりやすく、",
          "スタッフへの説明も不要でした。売上はダッシュボードでリアルタイムに",
          "確認できて、翌月にしっかり振り込まれました。本当に手間ゼロです。",
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // Pricing Section ("サービスラインナップ")
  // ----------------------------------------------------------
  serviceLineup: {
    sectionTitle: "サービスラインナップ",
    description: [
      "店舗の規模や業態に合わせて、最適なプランをお選びいただけます。",
      "※すべて完全成果報酬型。初期費用・月額費用は一切かかりません。",
    ],
    plans: [
      {
        name: "ハヤパス スタンダード",
        tagline: "1店舗向け・QRコード設置型",
        description: [
          "飲食店・整骨院・クリニックなど1店舗向け。",
          "QRを置くだけで即日スタート。完全成果報酬。",
        ],
      },
      {
        name: "ハヤパス マルチ",
        tagline: "複数店舗・チェーン向け一括管理",
        description: [
          "2店舗以上のチェーン・フランチャイズ向け。",
          "本部で全店舗の売上を一元管理できます。",
        ],
      },
      {
        name: "ハヤパス プレミアム",
        tagline: "VIP席・個室など高単価オプション販売",
        description: [
          "VIP席・個室・優先案内など高単価のオプションも販売可能。",
          "客単価と収益をさらに最大化します。",
        ],
      },
      {
        name: "ハヤパス エンタープライズ",
        tagline: "予約システム・POSとのAPI連携",
        description: [
          "既存の予約システムやPOSレジと連携し、",
          "ファストパス管理を完全自動化。大規模施設向け。",
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // FAQ Section
  // ----------------------------------------------------------
  faq: {
    sectionTitle: "よくある質問",
    description: [
      "導入前によくお寄せいただくご質問をまとめました。",
      "ご不明な点があればお気軽にお問い合わせください。",
    ],
    viewAllButton: "その他のFAQを見る",
    questions: [
      {
        q: "初期費用・月額費用はかかりますか？",
        a: "一切かかりません。初期費用ゼロ・月額費用ゼロの完全成果報酬型です。ファストパスが売れた分だけ手数料が発生する仕組みなので、売れなければ費用は0円。導入リスクはゼロです。",
      },
      {
        q: "行列が減ってしまいませんか？（既存のお客様への影響は？）",
        a: "ご安心ください。ファストパスは通常の行列とは別に「早く入りたいお客様」向けに提供するオプションです。通常の行列はそのまま残るため、既存のお客様への影響はありません。むしろ「待てない」と帰っていたお客様を取り込める機会が生まれます。",
      },
      {
        q: "スタッフへの説明や研修は必要ですか？",
        a: "必要ありません。お客様がスマホでQRをスキャンし、自分で購入・受け取りまで完結します。スタッフは「ファストパスをお持ちのお客様を優先案内する」だけ。付属の案内フレーズ集があるので、初日からスムーズに対応できます。",
      },
      {
        q: "ファストパスを使ったお客様に不満を持つ一般のお客様は出ませんか？",
        a: "心配されるオーナー様は多いですが、実績店舗では大きな問題になっていません。「有料オプションのご利用者様を優先案内しています」と一言添えるだけでご理解いただけます。付属のクレーム対応マニュアルと案内フレーズ集を使えば、初日から安心して対応できます。",
      },
      {
        q: "どんな業種でも使えますか？",
        a: "「待ち時間が発生する業種」であれば基本的に導入可能です。飲食店・整骨院・クリニック・カフェ・スイーツ店・ベーカリーなど幅広い業種でご利用いただいています。業種や業態に合わせた設定方法もサポートしますので、まずはお気軽にご相談ください。",
      },
    ],
  },

  // ----------------------------------------------------------
  // CTA / Trial Section
  // ----------------------------------------------------------
  cta: {
    badge: "まずは資料を見てから検討できます",
    heading: ["行列を収益に変える、", "リスクゼロの一歩。"],
    description: [
      "初期費用ゼロ・月額費用ゼロ・完全成果報酬。",
      "申し込みはWebから3分、QRが届いたら即日スタート。",
      "しつこい営業はしません。1分で資料のダウンロードが完了します。",
      "まずは資料を見て、ゆっくりご検討ください。",
    ],
    downloadButton: "無料で資料をダウンロード",
    trialButton: "無料で資料をダウンロード",
    contactLink: "ハヤパスについてご相談・お問い合わせはこちら",
  },

  // ----------------------------------------------------------
  // Blog Section
  // ----------------------------------------------------------
  blog: {
    sectionTitle: "ハヤパスBlog",
    description: [
      "行列収益化の最新情報や、",
      "導入店舗のノウハウをお届けしています。",
    ],
    viewMoreButton: "記事をもっと見る",
  },

  // ----------------------------------------------------------
  // Footer
  // ----------------------------------------------------------
  footer: {
    copyright: "Copyright © ハヤパス All Rights Reserved.",
    operatorLabel: "運営：",
    operatorName: "ハヤパス運営事務局",
    address: ["〒169-0074", "東京都新宿区北新宿2丁目21番1号新宿フロントタワー"],
    nav: {
      aboutTitle: "ハヤパスについて",
      menuItems: [
        "サービスについて",
        "料金・プラン",
        "導入事例",
        "よくある質問",
        "お問い合わせ",
        "運営会社",
        "ログイン",
      ],
      mediaTitle: "コンテンツ",
      mediaItems: [
        "ハヤパスBlog",
        "導入事例",
        "公式Instagramチャンネル",
        "公式Youtubeチャンネル",
      ],
      resourcesTitle: "サービス資料",
      resourceItems: [
        "ハヤパス スタンダード 資料",
        "ハヤパス マルチ 資料",
        "ハヤパス プレミアム 資料",
        "ハヤパス エンタープライズ 資料",
      ],
      legalItems: [
        "利用規約",
        "個人情報の取り扱い",
      ],
      corporateSite: "コーポレートサイト",
      recruitment: "採用情報",
    },
    relatedServices: [
      "ハヤパス マルチ",
      "ハヤパス プレミアム",
      "ハヤパス エンタープライズ",
    ],
  },
} as const;

// ============================================================
// URL constants
// ============================================================

export const urls = {
  // CTA / download
  trial: "https://form.run/@hayapass-trial",
  contact: "https://form.run/@contact-hayapass",
  documents: "/documents",

  // Main site
  home: "/",
  cases: "/case",
  feature: "/feature",
  price: "/price",
  blog: "/blog",
  faq: "/faq",

  // Pricing / DL buttons
  aspServiceDoc: "/documents/standard",
  solarApiDoc: "/documents/enterprise",

  // Service plan pages
  evV2H: "/",
  evV2HFooter: "/",
  biz: "/",
  kkc: "/",
  faqArticleEnterprise: "/faq",
  faqArticleSupport: "/faq",

  // Corporate / legal
  corporate: "/",
  privacyPolicy: "/privacy",
  termsOfServiceSaaS: "/terms",
  termsOfServiceAPI: "/terms",
  termsOfServiceBPO: "/terms",
  carbonGame: "/",
  booking: "/contact",
  login: "/login",
  findy: "/",

  // Blog article URLs
  blogResearch: "/blog",
  blogSimulation: "/blog",
  blogJikashouhi: "/blog",
  blogAspUpdate: "/blog",
  blogAboutEnegaeru: "/blog",
  blogLowVoltageGrid: "/blog",
  blogGxEnergy: "/blog",
  blogReinventingUpside: "/blog",
  blogKantoGx: "/blog",

  // Footer nav
  footerFeature: "/feature",

  // Success case base path (append slug for full URL)
  caseBase: "/case/",

  // Cases
  caseKankyosyo: "/case/kankyosyo",
  caseElj: "/case/elj",
  caseGcenergy: "/case/gcenergy",
  caseKyoshinkk: "/case/kyoshinkk",
  caseGinowandensetsu: "/case/ginowandensetsu",
  caseSolarworld: "/case/solarworld",
  caseAnker: "/case/anker",
  caseXsol: "/case/xsol",
  casePanasonic: "/case/panasonic",
  caseItsuki: "/case/itsuki",
  caseDenkosha: "/case/denkosha",
  caseFunas: "/case/funas",
  caseAfterhome: "/case/afterhome",
  caseSmartkankyodesign: "/case/smartkankyodesign",
  caseNextenergy: "/case/nextenergy",
  caseTgoctpusenergy: "/case/tgoctpusenergy",
  caseTohogas: "/case/tohogas",
  caseHtbEnergy: "/case/htb-energy",
  caseNihoneconet: "/case/nihoneconet",
  caseNangokusyokusan: "/case/nangokusyokusan",
  caseTakumidenki: "/case/takumidenki",
  caseShinnihonjusetsu: "/case/shinnihonjusetsu",
  caseSunlifecorporation: "/case/sunlifecorporation",
  caseFamilykoubou: "/case/familykoubou",
} as const;
