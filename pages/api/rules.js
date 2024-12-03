// 规则集通用配置
const ruleProviderCommon = {
  type: "http",
  format: "yaml",
  interval: 86400,
};
// 规则集配置
const ruleProviders = {
  private: {
    ...ruleProviderCommon,
    behavior: "domain",
    path: "./ruleset/private.yaml",
    url: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/private.yaml",
  },
  cn_domain: {
    ...ruleProviderCommon,
    behavior: "domain",
    path: "./ruleset/cn_domain.yaml",
    url: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.yaml",
  },
  telegram_domain: {
    ...ruleProviderCommon,
    behavior: "domain",
    path: "./ruleset/telegram_domain.yaml",
    url: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/telegram.yaml",
  },
  google_domain: {
    ...ruleProviderCommon,
    behavior: "domain",
    path: "./ruleset/google_domain.yaml",
    url: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/google.yaml",
  },
  "geolocation-!cn": {
    ...ruleProviderCommon,
    behavior: "domain",
    path: "./ruleset/geolocation-!cn.yaml",
    url: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/geolocation-!cn.yaml",
  },
  cn_ip: {
    ...ruleProviderCommon,
    behavior: "ipcidr",
    path: "./ruleset/cn_ip.yaml",
    url: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/cn.yaml",
  },
  telegram_ip: {
    ...ruleProviderCommon,
    behavior: "ipcidr",
    path: "./ruleset/telegram_ip.yaml",
    url: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/telegram.yaml",
  },
  google_ip: {
    ...ruleProviderCommon,
    behavior: "ipcidr",
    path: "./ruleset/google_ip.yaml",
    url: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/google.yaml",
  },
  steam: {
    ...ruleProviderCommon,
    behavior: "classical",
    path: "./ruleset/steam.yaml",
    url: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Steam/Steam.yaml",
  },
  openai: {
    ...ruleProviderCommon,
    behavior: "classical",
    path: "./ruleset/openai.yaml",
    url: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/OpenAI/OpenAI.yaml",
  },
  bard: {
    ...ruleProviderCommon,
    behavior: "classical",
    path: "./ruleset/bard.yaml",
    url: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/BardAI/BardAI.yaml",
  },
  bing: {
    ...ruleProviderCommon,
    behavior: "classical",
    path: "./ruleset/bing.yaml",
    url: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Bing/Bing.yaml",
  },
  copilot: {
    ...ruleProviderCommon,
    behavior: "classical",
    path: "./ruleset/copilot.yaml",
    url: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Copilot/Copilot.yaml",
  },
  claude: {
    ...ruleProviderCommon,
    behavior: "classical",
    path: "./ruleset/claude.yaml",
    url: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Claude/Claude.yaml",
  },
  // 去广告
  reject_non_ip_no_drop: {
    ...ruleProviderCommon,
    format: "text",
    behavior: "classical",
    path: "./rule_set/sukkaw_ruleset/reject_non_ip_no_drop.txt",
    url: "https://ruleset.skk.moe/Clash/non_ip/reject-no-drop.txt",
  },
  reject_non_ip_drop: {
    ...ruleProviderCommon,
    format: "text",
    behavior: "classical",
    path: "./rule_set/sukkaw_ruleset/reject_non_ip_drop.txt",
    url: "https://ruleset.skk.moe/Clash/non_ip/reject-drop.txt",
  },
  reject_non_ip: {
    ...ruleProviderCommon,
    format: "text",
    behavior: "classical",
    path: "./rule_set/sukkaw_ruleset/reject_non_ip.txt",
    url: "https://ruleset.skk.moe/Clash/non_ip/reject.txt",
  },
  reject_domainset: {
    ...ruleProviderCommon,
    format: "text",
    behavior: "classical",
    path: "./rule_set/sukkaw_ruleset/reject_domainset.txt",
    url: "https://ruleset.skk.moe/Clash/domainset/reject.txt",
  },
  reject_ip: {
    ...ruleProviderCommon,
    format: "text",
    behavior: "classical",
    path: "./rule_set/sukkaw_ruleset/reject_ip.txt",
    url: "https://ruleset.skk.moe/Clash/ip/reject.txt",
  },
};
// 代理组通用配置
const groupBaseOption = {
  interval: 300,
  timeout: 3000,
  url: "https://cp.cloudflare.com/generate_204",
  // lazy: true,
  "max-failed-times": 3,
  hidden: false,
  "exclude-filter":
    "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
  "include-all": false,
};

const rules = [
  // 去广告
  "RULE-SET,reject_non_ip,REJECT",
  "RULE-SET,reject_domainset,REJECT",
  "RULE-SET,reject_non_ip_drop,REJECT-DROP",
  "RULE-SET,reject_non_ip_no_drop,REJECT",
  // 自定义规则开始
  "DOMAIN,yacd.haishan.me,DIRECT",
  "DOMAIN-SUFFIX,open.spotify.com,DIRECT",
  "DOMAIN-KEYWORD,spotify,PROXY",
  "DOMAIN-SUFFIX,micu.hk,DIRECT",
  "DOMAIN-SUFFIX,ii00.cc,DIRECT",
  "DOMAIN-SUFFIX,hxd.as174.de,DIRECT",
  "DOMAIN-SUFFIX,emby.as174.de,PROXY",
  "DOMAIN-SUFFIX,tanhuatv.site,PROXY",
  "IP-CIDR,218.78.7.16/32,DIRECT",
  "IP-CIDR,98.126.27.164/32,DIRECT",
  "DOMAIN-SUFFIX,eu,PROXY",
  "DOMAIN-SUFFIX,hk,PROXY",
  "DOMAIN-SUFFIX,jp,PROXY",
  "DOMAIN-SUFFIX,kr,PROXY",
  "DOMAIN-SUFFIX,sg,PROXY",
  "DOMAIN-SUFFIX,tw,PROXY",
  "DOMAIN-SUFFIX,uk,PROXY",
  "DOMAIN-SUFFIX,us,PROXY",
  "DOMAIN-SUFFIX,ca,PROXY",
  // 自定义规则结束

  // 规则集合
  "RULE-SET,reject_ip,REJECT",
  "RULE-SET,private,DIRECT",
  "RULE-SET,bing,PROXY",
  "RULE-SET,copilot,PROXY",
  "RULE-SET,bard,PROXY",
  "RULE-SET,openai,PROXY",
  "RULE-SET,claude,PROXY",
  "RULE-SET,steam,PROXY",
  "RULE-SET,telegram_domain,PROXY",
  "RULE-SET,telegram_ip,PROXY",
  "RULE-SET,google_domain,PROXY",
  "RULE-SET,google_ip,PROXY",
  "RULE-SET,geolocation-!cn,PROXY",
  "RULE-SET,cn_domain,DIRECT",
  "RULE-SET,cn_ip,DIRECT",
  "MATCH,PROXY",
];

// 程序入口
function main() {
  const config = {};

  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      name: "PROXY",
      type: "select",
      proxies: ["AUTO"],
      "include-all": true,
      icon: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/Orz-3/mini/master/Color/Static.png",
    },
    {
      ...groupBaseOption,
      name: "AUTO",
      type: "url-test",
      tolerance: 50,
      "include-all": true,
      icon: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/Orz-3/mini/master/Color/Urltest.png",
    },
  ];

  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;

  return config;
}

const config = main();

export default config;
