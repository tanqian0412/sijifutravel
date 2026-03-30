'use client';

import { useState } from 'react';

export default function TravelGuidePage() {
  const [copied, setCopied] = useState(false);

  const guideWechatId = 'ziyue11-15';
  const guideEmail = '2584144797@qq.com';
  const guidePhone = '+86 186 0078 9081';
  const guideWhatsApp = '+86 189 0865 1384';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      fontFamily: '"PingFang SC", "Lantinghei SC", "Microsoft YaHei", Arial, "宋体", sans-serif, tahoma',
      fontSize: '14px',
      color: 'rgb(51, 51, 51)',
      lineHeight: '24px',
      backgroundColor: '#fff',
      margin: 0,
      padding: 0,
      minHeight: '100vh'
    }}>
      {/* Main Container */}
      <div style={{ maxWidth: '1070px', margin: '0 auto', padding: '0' }}>

        {/* Question Section */}
        <div style={{ marginBottom: '15px' }}>
          <h1 style={{ fontSize: '16px', fontWeight: 700, color: 'rgb(51, 51, 51)', lineHeight: '26px', margin: 0 }}>
            <strong>计划去北京玩几天，路线行程怎么安排？大概需要多少钱？</strong>
          </h1>
          <div style={{ marginTop: '5px', lineHeight: '20px' }}>
            <span>打算和朋友去北京旅行，门票和住宿怎么安排比较省钱？有没有熟悉北京的朋友给点建议，感谢！</span>
          </div>
        </div>

        {/* Answer Count */}
        <div style={{ fontWeight: 700, borderTop: '1px solid rgb(235, 240, 241)', paddingTop: '20px', marginBottom: '0' }}>
          <span>286002个回答</span>
        </div>

        {/* Answer 1 */}
        <div style={{ borderTop: '1px solid rgb(235, 240, 241)', paddingTop: '20px', marginTop: '15px' }}>

          {/* User Info */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=aming"
              alt="用户头像"
              style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ fontWeight: 'bold', color: '#C41E3A' }}>旅行者阿明</span>
                <span style={{ backgroundColor: '#ffd700', padding: '2px 6px', borderRadius: '3px', fontSize: '10px' }}>Lv.28</span>
              </div>
              <div style={{ fontSize: '12px', color: '#999' }}>3天前</div>
            </div>
          </div>

          {/* Content */}
          <div style={{ lineHeight: '24px' }}>

            {/* Title */}
            <h3 style={{ textAlign: 'center', margin: '10px 0' }}>
              <span style={{ color: '#e67e22' }}><strong>2026北京旅游攻略｜热门景点+美食+住宿全攻略</strong></span>
            </h3>

            {/* Hero Image */}
            <p style={{ textAlign: 'center', margin: '15px 0' }}>
              <img
                src="/素材/xhs_beijing_guide_01.jpg"
                alt="故宫全景"
                style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
              />
            </p>

            {/* Tips Box */}
            <div style={{
              border: '1px solid #ffe3b7',
              backgroundColor: '#fff5e5',
              padding: '15px 20px',
              lineHeight: '1.5',
              color: '#333',
              margin: '10px 0'
            }}>
              <b>温馨提示：</b><br/>
              北京是中国的政治文化中心，这里有雄伟的万里长城，宏伟的紫禁城，学术氛围浓厚的清华北大，还有数不尽的京味美食🍜。准备去北京旅游的宝宝们，这篇攻略帮你安排得明明白白！
            </div>

            {/* Main Content */}
            <div>
              <p style={{ margin: '10px 0' }}>
                <strong>【必看】</strong><strong>北京5日游完整攻略！亲身体验分享！</strong>
              </p>

              <p style={{ marginLeft: '20px' }}>
                刚从北京游玩回来，这次选择的是半自由行模式，走了故宫、八达岭长城、颐和园、天坛等经典景区，整体体验非常棒！北京的城市规模很大，景点之间距离较远，如果没有当地人帮忙安排，自己玩会很折腾。这次幸亏有朋友推荐的当地导游帮忙全程安排，省了不少麻烦。
              </p>

              {/* Beijing Image */}
              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/xhs_gugong_guide_02.jpg"
                  alt="故宫博物院"
                  style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
              </p>

              {/* 天坛图片 */}
              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/tiantan.jpg"
                  alt="天坛公园"
                  style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
              </p>

              <p style={{ margin: '10px 0' }}>
                <strong>
                  <span>通过当地导游</span>
                  <span style={{ color: '#ff0000' }}>真真</span>
                  <span>安排的5日游，</span>
                  <span style={{ color: '#ff0000', textDecoration: 'underline' }}>人均费用在1500-3000元之间</span>
                  <span>，包含接机、住宿、交通和景区门票，</span>
                  <span style={{ color: '#ff0000' }}>三环内连锁酒店，环境干净整洁！</span>
                </strong>
              </p>

              {/* QR Code */}
              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/wechat-qr.png"
                  alt="微信二维码"
                  style={{ width: '200px', height: 'auto', display: 'inline-block' }}
                />
              </p>

              <p style={{ margin: '10px 0' }}>
                <span>真真导游从事北京旅游接待多年，对各景点路线非常熟悉，可以根据你的出发地、出行人数和预算制定专属方案。</span>
                <span style={{ color: '#ff0000', textDecoration: 'underline' }}>ziyue11-15</span>
                <span>（长按复制添加），全程没有任何强制消费。</span>
              </p>

              {/* Section 1: 北京三日游行程 */}
              <h3 style={{ color: '#e67e22', marginTop: '20px' }}><strong>北京三日游行程安排</strong></h3>

              <h4 style={{ color: '#27ae60' }}><strong>第一天：天安门广场-故宫-景山公园-王府井</strong></h4>
              <p style={{ marginLeft: '15px' }}>
                上午：早起前往天安门广场，看升旗仪式（需要提前查好时间）→ 毛主席纪念堂<br/>
                上午：游览故宫，建议从午门进入，一直走到神武门<br/>
                下午：登上景山公园，俯瞰故宫全景<br/>
                晚上：逛王府井小吃街，品尝北京美食
              </p>

              {/* 景山公园 - AI生成图片 */}
              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/jingshan_park_generated.png"
                  alt="景山公园俯瞰故宫"
                  style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
              </p>

              {/* 王府井夜景 - AI生成图片 */}
              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/wangfujing_generated.png"
                  alt="王府井商业街夜景"
                  style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
              </p>

              <h4 style={{ color: '#27ae60' }}><strong>第二天：八达岭长城-奥林匹克公园</strong></h4>
              <p style={{ marginLeft: '15px' }}>
                上午：前往八达岭长城，建议乘坐官方旅游专线或包车前往<br/>
                下午：返回市区，游览鸟巢、水立方外景，拍照打卡<br/>
                晚上：可选择观看鸟巢灯光秀
              </p>

              {/* 八达岭长城 */}
              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/xhs_beijing_guide_04.jpg"
                  alt="八达岭长城"
                  style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
              </p>

              {/* 鸟巢 */}
              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/bird_nest.jpg"
                  alt="鸟巢体育场"
                  style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
              </p>

              {/* 水立方 */}
              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/water_cube.jpg"
                  alt="水立方"
                  style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
              </p>

              <h4 style={{ color: '#27ae60' }}><strong>第三天：颐和园-圆明园-清华北大</strong></h4>
              <p style={{ marginLeft: '15px' }}>
                上午：游览颐和园，昆明湖畔散步，参观长廊<br/>
                下午：前往圆明园遗址，感受历史<br/>
                傍晚：车览清华大学、北京大学外景
              </p>

              {/* 圆明园 - AI生成图片 */}
              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/yuanmingyuan_generated.png"
                  alt="圆明园遗址"
                  style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
              </p>

              {/* Beijing Images */}
              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/xhs_beijing_guide_05.jpg"
                  alt="颐和园"
                  style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
              </p>

              {/* Section: 出行概况 */}
              <p style={{ color: '#e67e22' }}><strong>一、出行概况：</strong></p>

              <p style={{ marginLeft: '20px' }}>
                <strong>和几位朋友从广州出发，在北京玩了5天4晚。</strong>从下飞机开始就有专车接站，酒店、景区门票、每日的用餐和出行交通全部提前安排好了，<span style={{ color: '#ff0000' }}>人均算下来不到2500元</span>，比自己单独订便宜不少。整个过程很轻松，不需要自己操心门票预约这些繁琐的事情。
              </p>

              <p style={{ color: '#3366ff' }}><strong>费用参考：1500-3000元/人（根据淡旺季浮动）</strong></p>
              <p style={{ color: '#3366ff' }}><strong>时长：5天4晚 / 3天2晚</strong></p>
              <p style={{ color: '#3366ff' }}><strong>包含内容：</strong></p>
              <p style={{ color: '#3366ff' }}><strong>①24小时接机服务，专车往返各景区</strong></p>
              <p style={{ color: '#3366ff' }}><strong>②三环内连锁酒店，位置便利</strong></p>
              <p style={{ color: '#3366ff' }}><strong>③景区首道门票，省去排队时间</strong></p>
              <p style={{ color: '#3366ff' }}><strong>④每日早餐和正餐，体验当地特色</strong></p>

              <p style={{ marginLeft: '20px' }}>
                如果你也计划去北京旅游，建议提前联系真真了解具体报价和行程安排。她的微信：<strong><span style={{ color: '#ff0000' }}>ziyue11-15</span></strong>，咨询不收取任何费用。
              </p>

              <p style={{ margin: '10px 0' }}>
                <span>添加真真微信后，会收到一份</span><span style={{ color: '#ff0000' }}>北京各景点游览指南</span>，涵盖门票预约、行李寄存、路线规划等实用信息，非常实用！
              </p>

              {/* Itinerary */}
              <p style={{ color: '#ff0000' }}><strong>以下是这次走的经典路线，推荐给大家：</strong></p>

              <div style={{ margin: '15px 0' }}>
                <p><span style={{ color: '#27ae60' }}>第1天：</span><span>抵达北京 → 专车接机 → 入住酒店 → 前门大街、王府井自由逛</span></p>
                <p>住宿：北京  | 用餐：自理（可品尝前门小吃）</p>

                <p><span style={{ color: '#27ae60' }}>第2天：</span><span>天安门广场 → 毛主席纪念堂 → 故宫深度游 → 天坛公园</span></p>
                <p>住宿：北京  | 用餐：含早中餐</p>

                <p><span style={{ color: '#27ae60' }}>第3天：</span><span>八达岭长城 → 奥林匹克公园（鸟巢、水立方外景）</span></p>
                <p>住宿：北京  | 用餐：含早中餐（烤鸭特色餐）</p>

                <p><span style={{ color: '#27ae60' }}>第4天：</span><span>颐和园 → 圆明园遗址 → 车览清华大学</span></p>
                <p>住宿：北京  | 用餐：含早中餐</p>

                <p><span style={{ color: '#27ae60' }}>第5天：</span><span>睡到自然醒 → 自由活动 → 送机返程</span></p>
                <p>用餐：含早餐</p>
              </div>

              <p>导游真真微信：<strong><span style={{ color: '#ff0000' }}>ziyue11-15</span></strong>（长按复制添加）</p>

              <p>联系邮箱：<strong><span style={{ color: '#ff0000' }}>2584144797@qq.com</span></strong></p>

              {/* Section: 出行准备 */}
              <p><strong>出发前准备</strong></p>
              <p>证件类：身份证、学生证（部分景区半价）、护照（外籍游客）</p>
              <p>日用品：晕车药、肠胃药、创可贴、充电宝、润唇膏、防晒霜</p>
              <p>其他：舒适的运动鞋（爬长城必备）、轻便背包</p>

              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/xhs_beijing_guide_07.jpg"
                  alt="北京美食"
                  style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
              </p>

              {/* Section: 美食推荐 */}
              <p><strong>北京特色美食🍲</strong></p>
              <p>✓北京烤鸭    ✓老北京炸酱面    ✓门钉肉饼</p>
              <p>✓铜锅涮肉    ✓炒肝          ✓豆汁儿（因人而异）</p>
              <p>这些都可以让真真帮忙推荐当地人常去的店铺，比网红店实惠很多。</p>

              {/* Food Images */}
              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/xhs_beijing_guide_09.jpg"
                  alt="北京烤鸭"
                  style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
              </p>

              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/zhajiangmian_generated.png"
                  alt="老北京炸酱面"
                  style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
              </p>

              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/hotpot_new.jpg"
                  alt="涮肉火锅"
                  style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
              </p>

              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/mending_roubing.jpg"
                  alt="门钉肉饼"
                  style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
              </p>

              {/* Section: 注意事项 */}
              <p><strong>游玩建议</strong></p>
              <p>• 长城距离市区较远，建议预留一整天时间</p>
              <p>• 故宫需提前预约门票，节假日尤其紧张</p>
              <p>• 不要轻信路边拉客的，推荐通过正规渠道预约</p>
              <p>• 纪念品建议在正规商店购买，景区周边价格偏贵</p>

              {/* Beijing Night */}
              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/xhs_gugong_guide_08.jpg"
                  alt="故宫建筑"
                  style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
              </p>

              <p>想省心玩北京的朋友，可以加真真微信咨询：<strong><span style={{ color: '#ff0000' }}>ziyue11-15</span></strong>，她会根据你的需求定制专属行程。</p>

              {/* More Images */}
              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/xhs_beijing_guide_10.jpg"
                  alt="北京夜景"
                  style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
              </p>

              <p style={{ color: '#d35400' }}><strong>温馨提示：</strong>提前规划行程可以节省30%以上费用，建议提前1-2周联系安排。</p>
            </div>

            {/* Comment Info */}
            <div style={{ borderTop: '1px solid #eee', paddingTop: '10px', marginTop: '15px', color: '#999', fontSize: '13px' }}>
              <span style={{ color: '#C41E3A' }}>12条评论</span> | <span>收藏 28</span> | <span>3天前</span>
            </div>

            {/* Reply Section */}
            <div style={{ marginTop: '15px' }}>
              {[
                { name: '小李', level: 'Lv.15', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=xiaoli', time: '3天前', type: '追问', content: '攻略好详细！请问11月中旬去北京天气怎么样？长城的红叶还有吗？' },
                { name: '旅行者阿明', level: 'Lv.28', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhen', time: '3天前', type: '回复', content: '11月天气比较凉爽，适合出行。长城的红叶这个时候已经比较少了，但景色依然很美。' },
                { name: 'Mika', level: 'Lv.22', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mika', time: '2天前', type: '追问', content: '两个人可以成团吗？不想太多人一起。' },
                { name: '旅行者阿明', level: 'Lv.28', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhen', time: '2天前', type: '回复', content: '可以的，半自由行可以单独成团，也可以和其他小团队拼团，很灵活。' },
                { name: '阳光明媚', level: 'Lv.18', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sunny', time: '2天前', type: '追问', content: '上周跟朋友一起去的，确实不错！住宿条件很好，导游很专业，推荐！' },
                { name: '旅行者阿明', level: 'Lv.28', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhen', time: '2天前', type: '回复', content: '是的，真真的团性价比很高，我们上次也是找她安排的，整个行程很轻松。' }
              ].map((reply, index) => (
                <div key={index} style={{ borderTop: '1px solid #eee', padding: '10px 0', display: 'flex', gap: '10px' }}>
                  <img src={reply.avatar} alt={reply.name} style={{ width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '13px' }}>{reply.name}</span>
                      <span style={{ backgroundColor: '#ffd700', padding: '2px 6px', borderRadius: '3px', fontSize: '10px' }}>{reply.level}</span>
                      <span style={{ color: reply.type === '追问' ? '#27ae60' : '#C41E3A', fontSize: '12px' }}>{reply.type}</span>
                      <span style={{ fontSize: '11px', color: '#999' }}>{reply.time}</span>
                    </div>
                    <div style={{ fontSize: '13px', lineHeight: '1.5', color: '#666' }}>{reply.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Answer 2 */}
        <div style={{ borderTop: '1px solid rgb(235, 240, 241)', paddingTop: '20px', marginTop: '30px' }}>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=xiaowang"
              alt="用户头像"
              style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ fontWeight: 'bold', color: '#333' }}>背包客小王</span>
                <span style={{ backgroundColor: '#ffd700', padding: '2px 6px', borderRadius: '3px', fontSize: '10px' }}>Lv.16</span>
              </div>
              <div style={{ fontSize: '12px', color: '#999' }}>2天前</div>
            </div>
          </div>

          <div style={{ lineHeight: '24px' }}>
            <p>第一次去北京自由行确实容易踩坑：景区分散、交通复杂、门票还要提前预约。后来在朋友推荐下联系了真真，选择了半自由行套餐，体验完全不一样。</p>
            <p>几点感受：1）专车接送不用自己挤公共交通；2）门票提前预定不用排队；3）行程安排合理，不赶时间。整体费用比自己玩还划算，推荐！</p>

            <div style={{ borderTop: '1px solid #eee', paddingTop: '10px', marginTop: '15px', color: '#999', fontSize: '13px' }}>
              <span style={{ color: '#C41E3A' }}>5条评论</span> | <span>收藏 15</span> | <span>2天前</span>
            </div>

            <div style={{ marginTop: '15px' }}>
              {[
                { name: '旅行爱好者', level: 'Lv.12', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lvxing', time: '1天前', type: '追问', content: '请问有联系方式吗？想了解具体报价。' },
                { name: '背包客小王', level: 'Lv.16', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wang', time: '1天前', type: '回复', content: '微信：ziyue11-15，直接加她问就好，很专业。' },
                { name: '北京游客小张', level: 'Lv.20', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhang', time: '1天前', type: '追问', content: '刚参加完真真安排的旅行团回来，五天四晚玩遍北京精华景点，导游很负责，推荐！' },
                { name: '背包客小王', level: 'Lv.16', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wang', time: '1天前', type: '回复', content: '看来我们选择一样，我也很满意这次的行程安排，真真人很耐心，有问必答。' }
              ].map((reply, index) => (
                <div key={index} style={{ borderTop: '1px solid #eee', padding: '10px 0', display: 'flex', gap: '10px' }}>
                  <img src={reply.avatar} alt={reply.name} style={{ width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '13px' }}>{reply.name}</span>
                      <span style={{ backgroundColor: '#ffd700', padding: '2px 6px', borderRadius: '3px', fontSize: '10px' }}>{reply.level}</span>
                      <span style={{ color: reply.type === '追问' ? '#27ae60' : '#C41E3A', fontSize: '12px' }}>{reply.type}</span>
                      <span style={{ fontSize: '11px', color: '#999' }}>{reply.time}</span>
                    </div>
                    <div style={{ fontSize: '13px', lineHeight: '1.5', color: '#666' }}>{reply.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Answer 3 */}
        <div style={{ borderTop: '1px solid rgb(235, 240, 241)', paddingTop: '20px', marginTop: '30px' }}>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=zhoumo"
              alt="用户头像"
              style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ fontWeight: 'bold', color: '#333' }}>周末旅游</span>
                <span style={{ backgroundColor: '#ffd700', padding: '2px 6px', borderRadius: '3px', fontSize: '10px' }}>Lv.45</span>
              </div>
              <div style={{ fontSize: '12px', color: '#999' }}>1天前</div>
            </div>
          </div>

          <div style={{ lineHeight: '24px' }}>
            <p>上周刚带家人走完北京5日游，总结几点：</p>
            <p>1、带带孩子和老人出行建议选半自由行，有专人负责景点接送，省去很多麻烦。</p>
            <p>2、八达岭长城建议坐缆车，老人家不用爬太多路。</p>
            <p>3、故宫提前7天预约门票比较稳妥。</p>
            <p>4、找当地导游安排确实比自己单独订酒店门票便宜不少。导游微信：ziyue11-15，有需要可以自己咨询。</p>

            <div style={{ borderTop: '1px solid #eee', paddingTop: '10px', marginTop: '15px', color: '#999', fontSize: '13px' }}>
              <span style={{ color: '#C41E3A' }}>3条评论</span> | <span>收藏 18</span> | <span>1天前</span>
            </div>
          </div>
        </div>

        {/* Answer 4 - User Testimonials with Photos */}
        <div style={{ borderTop: '1px solid rgb(235, 240, 241)', paddingTop: '20px', marginTop: '30px' }}>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=xiaomei"
              alt="用户头像"
              style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ fontWeight: 'bold', color: '#333' }}>美食达人小美</span>
                <span style={{ backgroundColor: '#ffd700', padding: '2px 6px', borderRadius: '3px', fontSize: '10px' }}>Lv.32</span>
              </div>
              <div style={{ fontSize: '12px', color: '#999' }}>2天前</div>
            </div>
          </div>

          <div style={{ lineHeight: '24px' }}>
            <p>强烈推荐真真的团！这次带父母去北京，五天四晚全程专车接送，行程安排得很宽松，老人走累了随时可以休息。太贴心了！</p>

            {/* User submitted photos - 普通游客风格分享 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', margin: '15px 0' }}>
              <img src="/素材/tourist_selfie_1.jpg" alt="用户分享" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '6px' }} />
              <img src="/素材/tourist_selfie_2.jpg" alt="用户分享" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '6px' }} />
              <img src="/素材/tourist_selfie_3.jpg" alt="用户分享" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '6px' }} />
            </div>

            <p style={{ color: '#27ae60', fontSize: '13px' }}>✓ 这是一次非常满意的旅行，感谢真真的精心安排！</p>

            <div style={{ borderTop: '1px solid #eee', paddingTop: '10px', marginTop: '15px', color: '#999', fontSize: '13px' }}>
              <span style={{ color: '#C41E3A' }}>8条评论</span> | <span>收藏 45</span> | <span>5小时前</span>
            </div>

            <div style={{ marginTop: '15px' }}>
              {[
                { name: '开心果', level: 'Lv.18', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=kaixinguo', time: '2天前', type: '追问', content: '请问怎么联系真真？也想带爸妈去北京玩', contentImage: null },
                { name: '美食达人小美', level: 'Lv.32', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=xiaomei', time: '2天前', type: '回复', content: '微信：ziyue11-15，人很nice，咨询不收费', contentImage: null },
                { name: '老北京', level: 'Lv.25', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=laobeijing', time: '1天前', type: '追问', content: '父母游适合选择什么套餐？有高血压老人', contentImage: null },
                { name: '美食达人小美', level: 'Lv.32', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=xiaomei', time: '1天前', type: '回复', content: '真真会安排无障碍通道和充足休息时间，很适合老人', contentImage: null },
                { name: '糖糖', level: 'Lv.14', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tangtang', time: '1天前', type: '追问', content: '已加真真微信，回复好快！已经报名了下周的团', contentImage: null },
              ].map((reply, index) => (
                <div key={index} style={{ borderTop: '1px solid #eee', padding: '10px 0', display: 'flex', gap: '10px' }}>
                  <img src={reply.avatar} alt={reply.name} style={{ width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '13px' }}>{reply.name}</span>
                      <span style={{ backgroundColor: '#ffd700', padding: '2px 6px', borderRadius: '3px', fontSize: '10px' }}>{reply.level}</span>
                      <span style={{ color: reply.type === '追问' ? '#27ae60' : '#C41E3A', fontSize: '12px' }}>{reply.type}</span>
                      <span style={{ fontSize: '11px', color: '#999' }}>{reply.time}</span>
                    </div>
                    <div style={{ fontSize: '13px', lineHeight: '1.5', color: '#666' }}>{reply.content}</div>
                    {reply.contentImage && <img src={reply.contentImage} alt="" style={{ width: '80px', height: '80px', borderRadius: '4px', marginTop: '8px', objectFit: 'cover' }} />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Answer 5 - Another Testimonial */}
        <div style={{ borderTop: '1px solid rgb(235, 240, 241)', paddingTop: '20px', marginTop: '30px' }}>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=laoli"
              alt="用户头像"
              style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ fontWeight: 'bold', color: '#333' }}>摄影爱好者老李</span>
                <span style={{ backgroundColor: '#ffd700', padding: '2px 6px', borderRadius: '3px', fontSize: '10px' }}>Lv.40</span>
              </div>
              <div style={{ fontSize: '12px', color: '#999' }}>2天前</div>
            </div>
          </div>

          <div style={{ lineHeight: '24px' }}>
            <p>作为一个摄影爱好者，之前自己去总是找不到最佳拍摄点。这次跟真真的团，领队对每个景点的最佳拍摄时间都很熟悉，拍到了满意的照片！</p>

            {/* User submitted photos - 普通游客风格分享 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', margin: '15px 0' }}>
              <img src="/素材/tourist_selfie_2.jpg" alt="用户分享" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '6px' }} />
              <img src="/素材/tourist_selfie_3.jpg" alt="用户分享" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '6px' }} />
            </div>

            <p style={{ color: '#27ae60', fontSize: '13px' }}>✓ 强烈推荐给喜欢摄影的朋友！</p>

            <div style={{ borderTop: '1px solid #eee', paddingTop: '10px', marginTop: '15px', color: '#999', fontSize: '13px' }}>
              <span style={{ color: '#C41E3A' }}>6条评论</span> | <span>收藏 52</span> | <span>1小时前</span>
            </div>

            <div style={{ marginTop: '15px' }}>
              {[
                { name: '摄影师小陈', level: 'Lv.22', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=xiaochen', time: '2天前', type: '追问', content: '请问是哪个季节去拍照效果最好？想拍红叶', contentImage: null },
                { name: '摄影爱好者老李', level: 'Lv.40', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=laoli', time: '2天前', type: '回复', content: '10月中旬到11月初是最佳时间，长城红叶很美', contentImage: null },
              ].map((reply, index) => (
                <div key={index} style={{ borderTop: '1px solid #eee', padding: '10px 0', display: 'flex', gap: '10px' }}>
                  <img src={reply.avatar} alt={reply.name} style={{ width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '13px' }}>{reply.name}</span>
                      <span style={{ backgroundColor: '#ffd700', padding: '2px 6px', borderRadius: '3px', fontSize: '10px' }}>{reply.level}</span>
                      <span style={{ color: reply.type === '追问' ? '#27ae60' : '#C41E3A', fontSize: '12px' }}>{reply.type}</span>
                      <span style={{ fontSize: '11px', color: '#999' }}>{reply.time}</span>
                    </div>
                    <div style={{ fontSize: '13px', lineHeight: '1.5', color: '#666' }}>{reply.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div style={{ backgroundColor: '#f5f5f5', padding: '20px', marginTop: '30px', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#C41E3A', marginBottom: '15px' }}>
            北京四季福旅行社
          </div>

          <div style={{ marginBottom: '15px' }}>
            <img src="/素材/wechat-qr.png" alt="微信二维码" style={{ width: '150px', height: 'auto', borderRadius: '4px' }} />
          </div>

          <div style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
            扫描二维码添加真真微信
          </div>

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ backgroundColor: '#fff', padding: '12px 20px', borderRadius: '6px' }}>
              <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>📱 微信</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>{guideWechatId}</div>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>WhatsApp: {guideWhatsApp}</div>
              <button
                onClick={() => copyToClipboard(guideWechatId)}
                style={{ padding: '6px 12px', backgroundColor: '#C41E3A', color: 'white', border: 'none', borderRadius: '4px', fontSize: '12px', cursor: 'pointer' }}
              >
                {copied ? '已复制！' : '复制微信号'}
              </button>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '12px 20px', borderRadius: '6px' }}>
              <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>📧 邮箱</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>{guideEmail}</div>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '12px 20px', borderRadius: '6px' }}>
              <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>📞 电话</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>{guidePhone}</div>
            </div>
          </div>

          <div style={{ marginTop: '15px', fontSize: '13px', color: '#666', padding: '10px', backgroundColor: '#fff5e5', borderRadius: '6px' }}>
            🌟 咨询免费！添加微信即可获取行程规划和报价
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', padding: '20px', color: '#999', fontSize: '12px', borderTop: '1px solid #eee', marginTop: '20px' }}>
          <div>专注北京旅游 · 十年品质服务 · 50,000+游客选择</div>
          <div style={{ marginTop: '5px' }}>© 2024 北京四季福旅行社 All Rights Reserved</div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div style={{
        position: 'fixed',
        right: '70px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '160px',
        backgroundColor: '#fff',
        boxShadow: '0 0 20px rgba(139, 139, 183, 0.21)',
        borderRadius: '8px',
        padding: '15px 10px',
        zIndex: 1000
      }}>
        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
          <img src="/素材/wechat-qr.png" alt="微信二维码" style={{ width: '120px', height: 'auto', borderRadius: '4px', margin: '0 auto' }} />
          <div style={{ fontSize: '11px', color: '#666', marginTop: '5px' }}>微信咨询</div>
        </div>

        <div style={{ borderTop: '1px solid #eee', margin: '10px 0' }}></div>

        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <div style={{ fontSize: '11px', color: '#999', marginBottom: '3px' }}>微信</div>
          <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#C41E3A' }}>{guideWechatId}</div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <div style={{ fontSize: '11px', color: '#999', marginBottom: '3px' }}>WhatsApp</div>
          <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#25D366' }}>{guideWhatsApp}</div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '11px', color: '#999', marginBottom: '3px' }}>邮箱</div>
          <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#666', wordBreak: 'break-all' }}>{guideEmail}</div>
        </div>
      </div>
    </div>
  );
}
