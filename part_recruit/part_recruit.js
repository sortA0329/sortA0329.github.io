const parts_data = [
    {
        name: "PRパート",
        desc: "PRパートとは、来場者の方々に菁ヶ祭を最大限楽しんでもらうため、グッズ販売や案内業務を行うパートです。",
        sections: [
            {
                name: "製作セクション",
                desc: "あらゆるもののデザインをしています。",
                details: [
                    "全ての仕事がリモートワークで行われます｡夏休みに登校する必要がないです！また、PCを使ったデザインの作成･動画編集などを通じ､菁々祭だけで終わらない､将来にも役立つスキルをたくさん身につけることが出来ます。※このセクションでは、Adobeソフト(有料)の購入が必須になります。",
                    "パンフレットの制作、グッズのデザイン、X･Instagramで行われるカウントダウン企画の制作など、業務は多岐にわたります。",
                    "な　い　で　す　！ ぜひ､めいっぱい菁々祭を楽しんで下さい！！",
                    '菁々祭を"デザイン"したい人、夏休みは家から出たくないという人、ぜひ製作セクションへ！！',
                ],
                status: { 技術: 80, 達成感: 100, セクションへの愛: 100 },
            },
            {
                name: "技術セクション",
                desc: "主にWebサイトを製作し、情報として文化祭を支えています。",
                details: [
                    "基本的にパソコン上での作業になり、会議などもリモートで行うのがほとんどなので、製作セクションと同様、学校に行く必要は全くありません。アットホームです！",
                    "特に大きな仕事としてWebサイトのデザイン･コーディングがあります。文化祭に来る人が快適に使えるようなかっこいいサイトをHTMLやCSSなどを使用して作るという仕事です！実はこのパート員募集サイトも技術セクションが作っています！",
                    "ありません！",
                    "多少の知識は必要になると思いますが、全面的にサポートをするつもりなのでご安心ください！ webサイトを作ってみたい人や、情報の技術に詳しい人、学んでみたい人、ぜひ来てね～～",
                ],
                status: { 達成感: 100, 難しさ: 90, 楽しさ: 100 },
            },
            {
                name: "運営セクション",
                desc: "夏休みから一ヶ月後の菁ヶ祭当日に向けて、準備・運営をするセクションです。",
                details: [
                    "菁ヶ祭を実行するうえで必要不可欠な業務を担当しています。",
                    "①校内案内板(サインシステム)の制作・設置　②整理券の制作　③クラブ看板の設置　④転身殿前インフォメーションの設営　⑤カウントダウンオブジェ(転身殿前のオブジェ)の制作",
                    "①転身殿前インフォメーションの運営（放送・整理券配布・落とし物管理など）　　②グッズ販売",
                    "どうしてもたくさんの人手が必要となるセクションです。そのため、もし少しでも気になれば、兼セクションも可能なのでたくさんのご応募をお待ちしています！",
                ],
                status: { 時間: 50, 難しさ: 30, 楽しさ: 100 },
            },
            {
                name: "広報セクション",
                desc: "SNSに投稿する動画や画像を作っています。",
                details: [
                    "多くの人の目につくコンテンツを作るので大きな影響力を誇ります。また、家で完結する業務が多いです。(画像加工や動画編集の業務に関わりたい人は、Adobeソフト(有料)の購入が必要になります。)",
                    "YouTube動画の撮影や編集、X/Instagramに投稿するイベント出演者の紹介画像の作成、クラブの紹介やWebサイトに掲載するBLOGの執筆などなどです。",
                    "各種イベントの様子を撮影する業務があります。",
                    "菁々祭を一人でも多くの人に知ってもらうために！今立ち上がりませんか！",
                ],
                status: { 根性: 80, アイデア: 80, 計画性: 90 },
            },
        ],
    },
    {
        name: "校舎統括パート",
        desc: "校舎統括パート(いわゆる舎括)とは文化祭で必要な備品の貸し出し、部誌の印刷、備品移動の管理などをするパートです",
        sections: {
            details: [
                "全ての仕事がリモートワークで行われます｡夏休みに登校する必要がないです！また、PCを使ったデザインの作成･動画編集などを通じ､菁々祭だけで終わらない､将来にも役立つスキルをたくさん身につけることが出来ます。※このセクションでは、Adobeソフト(有料)の購入が必須になります。",
                "パンフレットの制作、グッズのデザイン、X･Instagramで行われるカウントダウン企画の制作など、業務は多岐にわたります。",
                "な　い　で　す　！ ぜひ､めいっぱい菁々祭を楽しんで下さい！！",
                '菁々祭を"デザイン"したい人、夏休みは家から出たくないという人、ぜひ製作セクションへ！！',
            ],
            status: { やりがい: 100, 友達: 90, 楽しさ: 70 },
        },
    },
];
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("parts").insertAdjacentHTML(
        "beforeend",
        `
${parts_data
    .map(({ name, desc, sections }) =>
        Array.isArray(sections)
            ? `
<div class="part_container">
    <div class="part_box show_left">
        <h2 class="part_name">${name}</h2>
        <p class="part_desc">${desc}</p>
    </div>
    <div class="sections">
${sections
    .map(
        ({ name, desc, details, status }) => `
<div class="section_container">
    <div class="section_branch"></div>
    <div class="section_box show_right">
        <div class="section_button" onclick="openAccordion(this)">
            <div class="section_name_box">
                <h3 class="section_name">${name}</h3>
                <div class="section_arrow"></div>
            </div>
            <p class="section_desc">${desc}</p>
        </div>
        <div class="section_detail">
            <h4 class="section_detail_title">セクションの特徴</h4>
            <p class="section_detail_desc">${details[0]}</p>
            <h4 class="section_detail_title">菁々祭当日までの仕事</h4>
            <p class="section_detail_desc">${details[1]}</p>
            <h4 class="section_detail_title">当日の仕事</h4>
            <p class="section_detail_desc">${details[2]}</p>
            <h4 class="section_detail_title">セクションから一言</h4>
            <p class="section_detail_desc">${details[3]}</p>
            <div class="section_status_container">
                ${Object.entries(status)
                    .map(
                        ([name, ratio]) => `
<div class="section_status" style="--bar-width: ${ratio}%">
    <h5 class="section_status_name">${name}</h5>
    <div class="section_status_bar"><div class="section_status_inner_bar"></div></div>
</div>
`,
                    )
                    .join("")}
            </div>
        </div>
    </div>
</div>
`,
    )
    .join("")}
    </div>
</div>
`
            : `
<div class="part_container">
    <div class="part_box show_left">
        <div class="section_button" onclick="openAccordion(this)">
            <div class="part_name_box">
                <h2 class="part_name">${name}</h2>
                <div class="section_arrow"></div>
            </div>
            <p class="part_desc">${desc}</p>
        </div>
        <div class="part_detail">
            <h4 class="section_detail_title">パートの特徴</h4>
            <p class="section_detail_desc">${sections.details[0]}</p>
            <h4 class="section_detail_title">菁々祭当日までの仕事</h4>
            <p class="section_detail_desc">${sections.details[1]}</p>
            <h4 class="section_detail_title">当日の仕事</h4>
            <p class="section_detail_desc">${sections.details[2]}</p>
            <h4 class="section_detail_title">パートから一言</h4>
            <p class="section_detail_desc">${sections.details[3]}</p>
            <div class="section_status_container">
                ${Object.entries(sections.status)
                    .map(
                        ([name, ratio]) => `
<div class="section_status" style="--bar-width: ${ratio}%">
    <h5 class="section_status_name">${name}</h5>
    <div class="section_status_bar"><div class="section_status_inner_bar"></div></div>
</div>
`,
                    )
                    .join("")}
            </div>
        </div>
    </div>
</div>
`,
    )
    .join("")}`,
    );
    const header = document.getElementById("header");
    const background = document.querySelector(".background");
    let ticking = false;
    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY < window.innerHeight / 3) {
                    if (!header.classList.contains("hidden_header")) header.classList.add("hidden_header");
                } else {
                    header.classList.remove("hidden_header");
                }
                background.style.transform = `translateY(${Math.round(-window.scrollY * 0.5)}px)`;
                ticking = false;
            });
            ticking = true;
        }
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.classList.contains("activated")) {
                entry.target.classList.add("activated");
            }
        });
    });
    document.querySelectorAll(".show_up").forEach((element) => {
        observer.observe(element);
    });
    document.querySelectorAll(".show_right").forEach((element) => {
        observer.observe(element);
    });
    document.querySelectorAll(".show_left").forEach((element) => {
        observer.observe(element);
    });
    document.querySelectorAll(".section_branch").forEach((element) => {
        observer.observe(element);
    });
    document.querySelectorAll(".foot_logo").forEach((element) => {
        observer.observe(element);
    });
});
function openAccordion(element) {
    if (element.parentNode.classList.contains("opened")) {
        element.parentNode.classList.remove("opened");
    } else {
        document.querySelectorAll(".section_button").forEach((e) => {
            e.parentNode.classList.remove("opened");
        });
        element.parentNode.classList.add("opened");
    }
}
