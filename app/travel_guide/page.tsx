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
            <strong>北京5日游大概需要多少钱？有没有合适的路线推荐？</strong>
          </h1>
          <div style={{ marginTop: '5px', lineHeight: '20px' }}>
            <span>打算和朋友去北京玩几天，门票和住宿怎么安排比较省钱？有没有熟悉北京的朋友给点建议，感谢！</span>
          </div>
        </div>

        {/* Answer Count */}
        <div style={{ fontWeight: 700, borderTop: '1px solid rgb(235, 240, 241)', paddingTop: '20px', marginBottom: '0' }}>
          <span>286000个回答</span>
        </div>

        {/* Answer 1 */}
        <div style={{ borderTop: '1px solid rgb(235, 240, 241)', paddingTop: '20px', marginTop: '15px' }}>

          {/* User Info */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <img
              src="https://dj-1309972557.file.myqcloud.com/uploads/userfiles/20014/images/avatar/20014-23021G035016.jpg"
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
              <span style={{ color: '#e67e22' }}><strong>北京5日游真实体验分享</strong></span>
            </h3>

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
              <b>北京</b>是中国的政治文化中心，这里有雄伟的万里长城，宏伟的紫禁城，学术氛围浓厚的清华北大，还有数不尽的京味美食🍜。在这里放慢脚步，感受历史与现代的交融，是一次难忘的体验✨
            </div>

            {/* Main Content */}
            <div>
              <p style={{ margin: '10px 0' }}>
                <strong>【必看】</strong><strong>北京5日游完整攻略！亲身体验分享！</strong>
              </p>

              <p style={{ marginLeft: '20px' }}>
                刚从北京游玩回来，这次选择的是半自由行模式，走了故宫、八达岭长城、颐和园、天坛等经典景区，整体体验非常棒！北京的城市规模很大，景点之间距离较远，如果没有当地人帮忙安排，自己玩会很折腾。这次幸亏有朋友推荐的地接导游帮忙全程安排，省了不少麻烦。
              </p>

              {/* Beijing Attraction Image */}
              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/beijing_gugong_03.jpg"
                  alt="故宫博物院"
                  style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
              </p>

              <p style={{ margin: '10px 0' }}>
                <strong>
                  <span>通过当地导游</span>
                  <span style={{ color: '#ff0000' }}>真真</span>
                  <span>安排的5日游，</span>
                  <span style={{ color: '#ff0000', textDecoration: 'underline' }}>人均费用在1500-2500元之间</span>
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

              {/* Section 1 */}
              <p style={{ color: '#e67e22' }}><strong>一、出行概况：</strong></p>

              <p style={{ marginLeft: '20px' }}>
                <strong>和几位朋友从广州出发，在北京玩了5天4晚。</strong>从下飞机开始就有专车接站，酒店、景区门票、每日的用餐和出行交通全部提前安排好了，<span style={{ color: '#ff0000' }}>人均算下来不到2000元</span>，比自己单独订便宜不少。整个过程很轻松，不需要自己操心门票预约这些繁琐的事情。
              </p>

              <p style={{ color: '#3366ff' }}><strong>费用参考：1500-2500元/人（根据淡旺季浮动）</strong></p>
              <p style={{ color: '#3366ff' }}><strong>时长：5天4晚</strong></p>
              <p style={{ color: '#3366ff' }}><strong>包含内容：</strong></p>
              <p style={{ color: '#3366ff' }}><strong>①24小时接机服务，专车往返各景区</strong></p>
              <p style={{ color: '#3366ff' }}><strong>②三环内连锁酒店，位置便利</strong></p>
              <p style={{ color: '#3366ff' }}><strong>③景区首道门票，省去排队时间</strong></p>
              <p style={{ color: '#3366ff' }}><strong>④每日早餐和正餐，体验当地特色</strong></p>

              <p style={{ marginLeft: '20px' }}>
                如果你也计划去北京旅游，建议提前联系真真了解具体报价和行程安排。她的微信：<strong><span style={{ color: '#ff0000' }}>ziyue11-15</span></strong>，咨询不收取任何费用。
              </p>

              {/* Great Wall Image */}
              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/beijing_greatwall_02.jpg"
                  alt="八达岭长城"
                  style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
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
              <p>日用品：晕车药、肠胃药、创可贴、充电宝、润唇膏</p>
              <p>其他：舒适的运动鞋、防晒霜、轻便背包</p>

              {/* Section: 美食推荐 */}
              <p><strong>北京特色美食🍲</strong></p>
              <p>✓北京烤鸭    ✓老北京炸酱面    ✓门钉肉饼</p>
              <p>✓铜锅涮肉    ✓炒肝          ✓豆汁儿（因人而异）</p>
              <p>这些都可以让真真帮忙推荐当地人常去的店铺，比网红店实惠很多。</p>

              {/* Food Image */}
              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/beijing_kaoya_01.jpg"
                  alt="北京烤鸭"
                  style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
              </p>

              {/* Section: 注意事项 */}
              <p><strong>游玩建议</strong></p>
              <p>• 长城距离市区较远，建议预留一整天时间</p>
              <p>• 故宫需提前预约门票，节假日尤其紧张</p>
              <p>• 不要轻信路边拉客的，推荐通过正规渠道预约</p>
              <p>• 纪念品建议在正规商店购买，景区周边价格偏贵</p>

              <p>想省心玩北京的朋友，可以加真真微信咨询：<strong><span style={{ color: '#ff0000' }}>ziyue11-15</span></strong>，她会根据你的需求定制专属行程。</p>

              {/* Beijing Night Scene */}
              <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <img
                  src="/素材/beijing-night.jpg"
                  alt="北京夜景"
                  style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
              </p>

              <p style={{ color: '#d35400' }}><strong>温馨提示：</strong>提前规划行程可以节省30%以上费用，建议提前1-2周联系安排。</p>
            </div>

            {/* Comment Info */}
            <div style={{ borderTop: '1px solid #eee', paddingTop: '10px', marginTop: '15px', color: '#999', fontSize: '13px' }}>
              <span style={{ color: '#C41E3A' }}>6条评论</span> | <span>收藏 12</span> | <span>3天前</span>
            </div>

            {/* Reply Section */}
            <div style={{ marginTop: '15px' }}>
              {[
                { name: '小李', level: 'Lv.15', avatar: 'https://dj-1309972557.file.myqcloud.com/uploads/userfiles/1/images/avatar/1-220610114H05.jpg', time: '2天前', type: '追问', content: '攻略好详细！请问11月中旬去北京天气怎么样？长城的红叶还有吗？' },
                { name: '旅行者阿明', level: 'Lv.28', avatar: 'https://dj-1309972557.file.myqcloud.com/uploads/userfiles/20014/images/avatar/20014-23021G035016.jpg', time: '2天前', type: '回复', content: '11月天气比较凉爽，适合出行。长城的红叶这个时候已经比较少了，但景色依然很美。' },
                { name: 'Mika', level: 'Lv.22', avatar: 'https://dj-1309972557.file.myqcloud.com/uploads/userfiles/1/images/avatar/1-220610114J33.jpg', time: '1天前', type: '追问', content: '两个人可以成团吗？不想太多人一起。' }
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
              src="https://dj-1309972557.file.myqcloud.com/uploads/userfiles/1/images/avatar/1-200PQ4421E.jpg"
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
              <span style={{ color: '#C41E3A' }}>2条评论</span> | <span>收藏 5</span> | <span>2天前</span>
            </div>

            <div style={{ marginTop: '15px' }}>
              {[
                { name: '旅行爱好者', level: 'Lv.12', avatar: 'https://dj-1309972557.file.myqcloud.com/uploads/userfiles/1/images/avatar/1-2206101234536.jpg', time: '1天前', type: '追问', content: '请问有联系方式吗？想了解具体报价。' },
                { name: '背包客小王', level: 'Lv.16', avatar: 'https://dj-1309972557.file.myqcloud.com/uploads/userfiles/1/images/avatar/1-200PQ4421E.jpg', time: '1天前', type: '回复', content: '微信：ziyue11-15，直接加她问就好，很专业。' }
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
              src="https://dj-1309972557.file.myqcloud.com/uploads/userfiles/1/images/avatar/1-2103291126408.jpg"
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
            <p>1、带孩子和老人出行建议选半自由行，有专人负责景点接送，省去很多麻烦。</p>
            <p>2、八达岭长城建议坐缆车，老人家不用爬太多路。</p>
            <p>3、故宫提前7天预约门票比较稳妥。</p>
            <p>4、找当地导游安排确实比自己单独订酒店门票便宜不少。导游微信：ziyue11-15，有需要可以自己咨询。</p>

            <div style={{ borderTop: '1px solid #eee', paddingTop: '10px', marginTop: '15px', color: '#999', fontSize: '13px' }}>
              <span style={{ color: '#C41E3A' }}>1条评论</span> | <span>收藏 8</span> | <span>1天前</span>
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
