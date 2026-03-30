'use client';

import { useState } from 'react';

export default function AdvertisementPage() {
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
      {/* Main Container - 1070px width, centered */}
      <div style={{
        maxWidth: '1070px',
        margin: '0 auto',
        padding: '0'
      }}>

        {/* Question Section */}
        <div style={{ marginBottom: '15px' }}>
          <h1 style={{
            fontSize: '16px',
            fontWeight: 700,
            color: 'rgb(51, 51, 51)',
            lineHeight: '26px',
            margin: 0
          }}>
            <strong>计划去北京玩5天左右，路线行程怎么安排？费用大概多少？</strong>
          </h1>
          <div style={{ marginTop: '5px', lineHeight: '20px' }}>
            <span style={{ color: 'rgb(51, 51, 51)' }}>近期想和朋友一起去北京旅行，门票和酒店好订吗？有没有省钱又好玩的行程路线推荐一下？</span>
            <span style={{ color: '#27ae60' }}>求去过的朋友推荐下适合的线路</span>
            <span style={{ color: 'rgb(51, 51, 51)' }}> 感谢！</span>
          </div>
        </div>

        {/* Answer Count */}
        <div style={{
          fontWeight: 700,
          borderTop: '1px solid rgb(235, 240, 241)',
          paddingTop: '20px',
          marginBottom: '0'
        }}>
          <span style={{ fontWeight: 700 }}>312500个回答</span>
        </div>

        {/* Answer 1 - GESH */}
        <div style={{ borderTop: '1px solid rgb(235, 240, 241)', paddingTop: '20px', marginTop: '15px' }}>

          {/* User Info */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', position: 'relative' }}>
            <div style={{ position: 'relative', marginRight: '10px' }}>
              <img
                src="https://dj-1309972557.file.myqcloud.com/uploads/userfiles/20014/images/avatar/20014-23021G035016.jpg"
                alt="GESH"
                style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              />
              <span style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '12px',
                height: '12px',
                backgroundColor: '#ffd700',
                borderRadius: '50%',
                border: '2px solid #fff'
              }} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ fontWeight: 'bold', color: '#C41E3A' }}>GESH</span>
                <span style={{ backgroundColor: '#ffd700', padding: '2px 6px', borderRadius: '3px', fontSize: '10px' }}>Lv.30</span>
              </div>
              <div style={{ fontSize: '12px', color: '#999' }}>5天前</div>
            </div>
          </div>

          {/* Content */}
          <div style={{ lineHeight: '24px' }}>

            {/* Title */}
            <h3 style={{ textAlign: 'center', margin: '10px 0' }}>
              <span style={{ color: '#e67e22' }}><strong>首都北京❤️一次庄严壮阔的旅行</strong></span>
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
              <b>Tips：</b><br/>
              <b>北京</b>作为我国的首都，这里有巍峨的长城⛰️，庄严的故宫🏯，神秘的清华北大🏢，还有令人垂涎三尺的各种小吃🍝，在这里你可以卸下所有烦恼，🥰放慢脚步，体验一场震撼人心的旅程～🧡
            </div>

            {/* Main Content */}
            <div>
              <div>
                <p style={{ margin: '10px 0' }}>
                  <strong>【强烈推荐】</strong><strong>北京旅游超全攻略！5日游良心不踩坑！</strong>
                </p>

                <p style={{ color: '#000', marginLeft: '20px' }}>
                  我是香港的游客，刚刚从北京旅游回来，那边景色真的非常美，故宫博物院、八达岭长城、圆明园、颐和园、天坛公园、奥林匹克体育中心、清华北大等精华景点都玩遍了，还品尝了北京烤鸭、炸酱面、豆汁儿等特色小吃，全程我们的相机和GoPro都停不下来。和大家分享下游玩北京的经验，相信对于第一次去北京玩的朋友一定会有很大帮助。
                </p>

                <p style={{ margin: '10px 0' }}>
                  <strong>
                    <span style={{ color: '#000' }}>推荐北京本地金牌导游</span>
                    <span style={{ color: '#ff0000' }}>真真</span>
                    <span style={{ color: '#000' }}>(人美踏实靠谱 人称-百事通)：</span>
                    <span style={{ color: '#ff0000', textDecoration: 'underline' }}>真真的微信（WeChat）ID:ziyue11-15</span>
                    <span style={{ color: '#2ecc71' }}>（点击微信ID号复制添加好友）。</span>
                    <span style={{ color: '#ff0000' }}>特别是在乎酒店的旅友们，一定要加真真，他们安排的酒店都在三环内！</span>
                  </strong>
                </p>

                {/* QR Code Image */}
                <p style={{ textAlign: 'center', margin: '15px 0' }}>
                  <img
                    src="/素材/wechat-qr.png"
                    alt="微信二维码"
                    style={{ width: '200px', height: 'auto', display: 'inline-block' }}
                  />
                </p>

                <p style={{ margin: '10px 0' }}>
                  <span style={{ color: '#000' }}>真真做了好多年的旅游接待，非常专业，经常组团带团旅游，想要去北京玩得省心省钱的朋友，可以加她的微信  </span>
                  <span style={{ color: '#ff0000', textDecoration: 'underline' }}><strong>ziyue11-15</strong></span>
                  <span style={{ color: '#2ecc71' }}><strong>（点击微信ID号复制 去添加微信）</strong></span>
                  <span style={{ color: '#000' }}>，反正加了问线路行程又不要钱！记得和她说是熟人介绍的哦，这样不仅可以</span>
                  <span style={{ color: '#2ecc71' }}><strong>免费定制行程</strong></span>
                  <span style={{ color: '#000' }}>，<strong>还可以帮买机票 </strong></span>
                  <span style={{ color: '#2c3e50' }}>！</span>
                </p>

                {/* Guide Intro Image */}
                <p>
                  <img
                    src="https://dj-1309972557.file.myqcloud.com/uploads/images/202402/20240219/8829ab35ce383219e776c761a4865c92.png"
                    alt="导游介绍"
                    style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '15px 0' }}
                  />
                </p>

                <p>&nbsp;</p>

                {/* Section 1 */}
                <p style={{ color: '#e67e22' }}><strong>一、我的北京游玩经历：</strong></p>

                <p style={{ marginLeft: '20px' }}>
                  <strong><span>和朋友从香港出发，去北京玩了5天4晚，整个吃住行都是由真真安排妥当</span></strong>，<strong><span>全程的行程景点、住宿、吃饭、门票、车等都是提前安排好了的，很省心！5天这些吃住行门票加一起，真真给了我们一个早鸟优惠套餐价格，人均只</span><span style={{ color: '#ff0000' }}>花了1880人民币</span><span>，这也是我为什么推荐去</span>北京<span><strong>的原因</strong>，真的是省心又省钱，还玩的好，吃的好，住的好。</span></strong>
                </p>

                <p style={{ color: '#3366ff' }}><strong>花费：人均1880人民币（我是提前预订的，不然很多票都预约不到）</strong></p>
                <p style={{ color: '#3366ff' }}><strong>时间：5天4晚</strong></p>
                <p style={{ color: '#3366ff' }}><strong>包含：1.机场接机，全程交通（豪华商务旅游车，舒适不怕晕车），专车专导；（这点很关键，因为自己安排交通坐车很麻烦）</strong></p>
                <p style={{ color: '#3366ff' }}><strong>2.一线星级酒店住宿，景点门票，每日用餐、导游、旅游车、等，这个真的是物超所值！</strong></p>

                <p style={{ marginLeft: '20px' }}>
                  如果大家想去北京旅游，推荐加一下当地导游<span style={{ color: '#ff0000' }}>真真</span>的微信(人很<span style={{ color: '#ff0000' }}>实在靠谱</span>)提前了解一下行程规划，她可以根据你的需求，比如说想去哪些景点啊、想吃啥玩啥、怎么玩啊，都可以帮你解答，还可以免费定制几条旅游线路，也省的自己到处找资料做攻略，就是个行走的北京攻略，哈哈~她的微信：<strong><span style={{ color: '#ff0000' }}>ziyue11-15</span><span style={{ color: '#2ecc71' }}>(👈点击复制，添加微信 免费领取北京行程+报价) 咨询是免费的。</span></strong>
                </p>

                <p style={{ margin: '10px 0' }}>
                  <span>加上</span><span style={{ color: '#ff0000' }}>真真</span>微信时，她会给每个人赠送了一份2025年【最新北京景点旅游攻略】的电子文档，非常接地气，为我们的旅游做好了足够的准备！
                </p>

                {/* Lazy Image 1 */}
                <p>
                  <img
                    src="https://dj-1309972557.file.myqcloud.com/uploads/images/userfiles/58988/202511/20251113/6ad69afa83c66f96161242f3b5daa9a6.jpg"
                    alt="旅游攻略"
                    style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '15px 0' }}
                  />
                </p>

                <p style={{ color: '#ff0000' }}>
                  <strong>真真</strong>说去北京一定要玩这一条经典线路，我把真真根据我的意向景区安排的<span style={{ color: '#ff0000' }}>五天四晚行程</span>发出来参考下：
                </p>

                {/* Itinerary */}
                <div style={{ margin: '15px 0' }}>
                  <p><span style={{ color: '#27ae60' }}>❤️D1：</span><span style={{ color: '#2ecc71' }}>上午抵达北京，真真安排接机（24小时都可以接），入住饭店，自由活动，推荐，前门大街，王府井小吃街，西单，东单，三里屯等等....</span></p>
                  <p>宿：北京 </p>
                  <p>餐：自理</p>

                  <p><span style={{ color: '#27ae60' }}>❤️D2：</span><span style={{ color: '#2ecc71' }}>天安门广场-毛主席纪念堂—故宫博物院－天坛公园-什刹海</span></p>
                  <p>宿：北京 </p>
                  <p>餐：早、中(正宗京菜）</p>

                  <p><span style={{ color: '#27ae60' }}>❤️D3：</span><span style={{ color: '#2ecc71' }}>八达岭长城深度游－-奥林匹克公园（外观鸟巢、水立方）</span></p>
                  <p>宿:  北京 </p>
                  <p>餐：早、中（烤鸭餐）</p>

                  <p><span style={{ color: '#27ae60' }}>❤️D4：</span><span style={{ color: '#2ecc71' }}>颐和园深游-圆明园-车览清北</span></p>
                  <p>住：北京 </p>
                  <p>餐：早、中</p>

                  <p><span style={{ color: '#27ae60' }}>❤️D5：</span><span style={{ color: '#2ecc71' }}>回程，依回程车次时间，统一安排送站/送机，返回温馨的家 </span></p>
                  <p>餐：早餐</p>
                </div>

                <p>本地导游<span style={{ color: '#ff0000' }}><strong>真真</strong></span>的微信：<span style={{ color: '#ff0000' }}><strong>ziyue11-15</strong></span><span style={{ color: '#16a085' }}>(👈点击微信ID复制，添加微信 免费领取行程+报价）</span></p>

                <p>也可以发送邮件给真真，真真的邮箱是：<strong><span style={{ color: '#ff0000' }}>2584144797@qq.com</span></strong></p>

                {/* Section: 出行必备 */}
                <p><strong>出行必备</strong></p>
                <p>证件类：带好身份证（大部分景点都需要）护照，台胞证，港澳通行证，有学生证的必带，大部分景点是半票。</p>
                <p>药品类：晕船药、肠胃药、创可贴、抗过敏药</p>
                <p>自拍杆、保湿喷雾、美白面膜都可以带上。充电宝建议带一个，美照拍到一半手机没电可就尴尬了。</p>

                {/* Lazy Image 2 */}
                <p>
                  <img
                    src="https://dj-1309972557.file.myqcloud.com/uploads/images/userfiles/58988/202511/20251113/7878862533f10c11cd5335a78551a97a.jpg"
                    alt="出行必备"
                    style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '15px 0' }}
                  />
                </p>

                {/* Section: 省RMB窍门 */}
                <p><strong>省RMB窍门：</strong></p>
                <p>第一次去是纯自由行，网上的攻略看的我是一头的雾水，花了很多冤枉钱还不省心！北京各个景点太分散，交通、安排路线也很麻烦，还有酒店预订、景点门票一大堆事情。在第一次去北京的时候，一个偶然的机会认识了一名网红旅游规划师--真真，她家是专门做北京半自由行的，有北京旅游的内部资源和专业的旅游规划服务，于是上次去的时候就联系她设计了行程旅游方案并陪同带着玩北京，不仅行程酒店全包干，还品尝了很多北京当地特色小吃，重点是只人均花了1880多人民币！强烈推荐一下</p>

                <p>真真 微信：<span style={{ color: '#ff0000' }}><strong>ziyue11-15</strong></span><span style={{ color: '#1abc9c' }}>(👈点击ID号复制或扫描二维码，添加微信 免费领取北京行程+报价+优惠) 咨询是免费的.</span></p>

                {/* Section: 特色美食 */}
                <p><strong>特色美食🍲</strong></p>
                <p>✓北京烤鸭<br/>✓老北京炸酱面<br/>✓门钉肉饼<br/>✓铜锅涮肉<br/>✓炒肝（不是真的炒，像炖的）<br/>✓豆汁儿（谨慎😰尝试）<br/>✓老北京糖葫芦串</p>
                <p>这些真真统统都可以安排~</p>

                {/* Lazy Image 3 - Food */}
                <p>
                  <img
                    src="https://dj-1309972557.file.myqcloud.com/uploads/images/pageimg/20230320/18-230320150A93.jpg"
                    alt="特色美食"
                    style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '15px 0' }}
                  />
                </p>

                {/* Section: 避坑 */}
                <p><strong>避90%的坑</strong></p>
                <p>不建议坐公交车，等车难，坐车累，到处堵车</p>
                <p>特产：去当地的超市买，不要去司机或导游介绍的地方买，多半是坑！</p>
                <p>路边吃饭拉客的不要去，多半是坑等着你跳。</p>

                <p><span style={{ color: '#ff0000' }}><strong>要安排三环内酒店的旅友们可以加一下真真：ziyue11-15</strong></span><span style={{ color: '#16a085' }}>(👈点击复制添加微信 免费领取北京行程+报价+优惠) 咨询是免费的。</span></p>

                {/* Lazy Images 4 & 5 */}
                <p>
                  <img
                    src="https://dj-1309972557.file.myqcloud.com/uploads/images/202504/20250410/1b9a5591d42fdfa8fa9dbaaa397d35ef.jpg"
                    alt="图片4"
                    style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '15px 0' }}
                  />
                  <img
                    src="https://dj-1309972557.file.myqcloud.com/uploads/images/202504/20250410/8efb0a876f6aaac11ceee39a404328d2.jpg"
                    alt="图片5"
                    style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '15px 0' }}
                  />
                </p>

                {/* Tips Section */}
                <p><span>Tips：第一次来北京旅游的宝宝们，担心消费被宰被坑的，建议选</span>真真<span>的这种定制服务，五天四晚只要1880人民币，尽情玩。而且像八达岭长城这些较远的景区景点，就省去不少烦心事，自己也乐得轻松自在，还包含接送、门票和餐饮、住宿、导游、保险等费用，是非常省心划算的出行方式了，墙裂推荐给懒人宝宝们！！</span></p>

                <p><span>发了这篇攻略之后，很多人私信我问</span>美女<span>的微信号是多少</span></p>
                <p><span>个人也强烈推荐去</span>北京<span>找</span>美女<span>帮忙安排吧，我已经亲自体验回来了</span></p>
                <p><span>我把她的微信发出来，</span>真真的微信ID：<span style={{ color: '#ff0000' }}><strong>ziyue11-15</strong></span><span>（</span><span style={{ color: '#16a085' }}>←点击微信号复制添加，免费获取行程跟报价</span><span>）</span></p>

                <p style={{ color: '#d35400' }}><strong>楼主温馨提醒: </strong><span style={{ color: '#16a085' }}>3分钟看完替您省40%费用，加好友再省30%</span></p>
              </div>

            </div>

            {/* Comment Info */}
            <div style={{
              borderTop: '1px solid #eee',
              paddingTop: '10px',
              marginTop: '15px',
              color: '#999',
              fontSize: '13px'
            }}>
              <span style={{ color: '#C41E3A' }}>8条评论</span> | <span>收藏 0</span> | 发布于 5天前
            </div>

            {/* Reply Section */}
            <div style={{ marginTop: '15px' }}>
              {[
                {
                  name: '卷卷1',
                  level: 'Lv.17',
                  avatar: 'https://dj-1309972557.file.myqcloud.com/uploads/userfiles/1/images/avatar/1-220610114H05.jpg',
                  time: '5天前',
                  type: '追问',
                  content: '攻略做的好详细啊，刚才看别人的都看晕了，都打算放弃了，看到你的又想去了，正好想带孩子去北京玩，可以说是很及时了，听说北京的景区都很大，自己玩的话作为外地人太费脑筋了，我也准备找一下你说的真真带我们玩。'
                },
                {
                  name: '宋青鵆',
                  level: 'Lv.67',
                  avatar: 'https://dj-1309972557.file.myqcloud.com/uploads/userfiles/1/images/avatar/1-220610114J33.jpg',
                  time: '5天前',
                  type: '追问',
                  content: '想下個月5天旅行遊覽北京可否帶我們？'
                },
                {
                  name: 'GESH',
                  level: 'Lv.30',
                  avatar: 'https://dj-1309972557.file.myqcloud.com/uploads/userfiles/1/images/avatar/1-220Q6155JO.jpg',
                  time: '5天前',
                  type: '追答',
                  content: '當然可以，你可以直接加入真真微信，她會為你安排詳細的行程，這是客服的微信：ziyue11-15（👈點選複製新增好友）咨詢真真的人很多，不一定及時通過，可以多試幾次~或者發送郵件告訴真真，郵箱：2584144797@qq.com'
                },
                {
                  name: 'LUV 2U',
                  level: 'Lv.30',
                  avatar: 'https://dj-1309972557.file.myqcloud.com/uploads/userfiles/1/images/avatar/1-2206101016011.jpg',
                  time: '5天前',
                  type: '追问',
                  content: '你們是什麼時候去的呀，我們打算明年2月份去，不知道天氣怎麼樣？'
                }
              ].map((reply, index) => (
                <div key={index} style={{
                  borderTop: '1px solid #eee',
                  padding: '10px 0',
                  display: 'flex',
                  gap: '10px'
                }}>
                  <img
                    src={reply.avatar}
                    alt={reply.name}
                    style={{ width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0 }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '13px' }}>{reply.name}</span>
                      <span style={{ backgroundColor: '#ffd700', padding: '2px 6px', borderRadius: '3px', fontSize: '10px' }}>{reply.level}</span>
                      <span style={{ color: reply.type === '追问' ? '#27ae60' : '#C41E3A', fontSize: '12px' }}>{reply.type}</span>
                      <span style={{ fontSize: '11px', color: '#999' }}>{reply.time}</span>
                    </div>
                    <div style={{ fontSize: '13px', lineHeight: '1.5', color: '#666' }}>
                      {reply.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Answer 2 - 泽渡慎吾 */}
        <div style={{ borderTop: '1px solid rgb(235, 240, 241)', paddingTop: '20px', marginTop: '30px' }}>

          {/* User Info */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', position: 'relative' }}>
            <div style={{ position: 'relative', marginRight: '10px' }}>
              <img
                src="https://dj-1309972557.file.myqcloud.com/uploads/userfiles/1/images/avatar/1-200PQ4421E.jpg"
                alt="泽渡慎吾"
                style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ fontWeight: 'bold', color: '#333' }}>泽渡慎吾</span>
                <span style={{ backgroundColor: '#ffd700', padding: '2px 6px', borderRadius: '3px', fontSize: '10px' }}>Lv.18</span>
              </div>
              <div style={{ fontSize: '12px', color: '#999' }}>4天前</div>
            </div>
          </div>

          {/* Content */}
          <div style={{ lineHeight: '24px' }}>
            <p style={{ margin: '10px 0' }}>
              关于北京之前在网上翻看了N多的自助游，自由行等等，什么10块钱打的到故宫门票站，什么50块钱一晚的住宿，什么门票折扣8折的，到了北京之后发现这一切都确确实实存在，但是这些全是骗人的!出门在外最重要的还是安全问题，在不知如何选择的情况下，偶然看到-家叫做"北京私人定制品质游"的自由行攻略。她们24小时提供免费的专车接站服务。抱着试试看的态度跟真真咨询了一下，给我们的感觉非常不错，她跟我们介绍的都是一条一条清清楚楚的线路,真真对我说北京这边最好的是结伴游，不像别家旅行社的团，几十人跟赶鸭子一样，自由度非常的高，时间景点都是由自己掌控,就叫我们故宫一天的时间，八达岭和奥林匹克公园一天的时间，颐和园和天坛一天的时间(一般早上1-2个景点，下午2-3个景点，时间非常充足，完全没有走马观花的感觉)。这样的话，时间就完全掌握在自己手中，非常人性化的设计，考虑的非常周到，这点做的是非常不错的。
            </p>

            <p>
              <img
                src="https://dj-1309972557.file.myqcloud.com/uploads/images/userfiles/58988/202511/20251113/b4cf89142f759f5376ea5d93112656ca.jpg"
                alt="图片"
                style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '15px 0' }}
              />
            </p>

            {/* Comment Info */}
            <div style={{
              borderTop: '1px solid #eee',
              paddingTop: '10px',
              marginTop: '15px',
              color: '#999',
              fontSize: '13px'
            }}>
              <span style={{ color: '#C41E3A' }}>3条评论</span> | <span>收藏 0</span> | 发布于 4天前
            </div>

            {/* Reply Section */}
            <div style={{ marginTop: '15px' }}>
              {[
                {
                  name: '穿KAWS',
                  level: 'Lv.33',
                  avatar: 'https://dj-1309972557.file.myqcloud.com/uploads/userfiles/1/images/avatar/1-2206101234536.jpg',
                  time: '4天前',
                  type: '追问',
                  content: '2個人可以成嗎'
                },
                {
                  name: '泽渡慎吾',
                  level: 'Lv.18',
                  avatar: 'https://dj-1309972557.file.myqcloud.com/uploads/userfiles/1/images/avatar/1-200PQ4421E.jpg',
                  time: '5天前',
                  type: '追答',
                  content: '2个人可以呀，她说不管是1个人还是2个人，都可以去，我个人还是不一样的，有时间的值得一去，真真也会根据不同人的需求进行安排的，还是比较自由的，具体的行程和价格的话你要自己和真真去商议，我把她的微信贴出来，真真WeChat ID：ziyue11-15 （点击ID复制去微信添加好友咨询）'
                },
                {
                  name: '李惟诺',
                  level: 'Lv.26',
                  avatar: 'https://dj-1309972557.file.myqcloud.com/uploads/userfiles/1/images/avatar/1-2206101346026.jpg',
                  time: '5天前',
                  type: '追问',
                  content: '刚从北京回来，说来也是缘分，找的就是真真，可能是因为口碑太好了吧，大家都找她，去了5天亲身体验确实服务的很周到'
                }
              ].map((reply, index) => (
                <div key={index} style={{
                  borderTop: '1px solid #eee',
                  padding: '10px 0',
                  display: 'flex',
                  gap: '10px'
                }}>
                  <img
                    src={reply.avatar}
                    alt={reply.name}
                    style={{ width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0 }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '13px' }}>{reply.name}</span>
                      <span style={{ backgroundColor: '#ffd700', padding: '2px 6px', borderRadius: '3px', fontSize: '10px' }}>{reply.level}</span>
                      <span style={{ color: reply.type === '追问' ? '#27ae60' : '#C41E3A', fontSize: '12px' }}>{reply.type}</span>
                      <span style={{ fontSize: '11px', color: '#999' }}>{reply.time}</span>
                    </div>
                    <div style={{ fontSize: '13px', lineHeight: '1.5', color: '#666' }}>
                      {reply.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Answer 3 - 刀妹 */}
        <div style={{ borderTop: '1px solid rgb(235, 240, 241)', paddingTop: '20px', marginTop: '30px' }}>

          {/* User Info */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', position: 'relative' }}>
            <div style={{ position: 'relative', marginRight: '10px' }}>
              <img
                src="https://dj-1309972557.file.myqcloud.com/uploads/userfiles/1/images/avatar/1-2103291126408.jpg"
                alt="刀妹"
                style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ fontWeight: 'bold', color: '#333' }}>刀妹</span>
                <span style={{ backgroundColor: '#ffd700', padding: '2px 6px', borderRadius: '3px', fontSize: '10px' }}>Lv.60</span>
              </div>
              <div style={{ fontSize: '12px', color: '#999' }}>3天前</div>
            </div>
          </div>

          {/* Content */}
          <div style={{ lineHeight: '24px' }}>
            <p style={{ margin: '10px 0' }}>
              6月28日，我和家人去北京玩了5天 每个人才花费1880多元都包含了：<br/>
              1、 故宫门票，八达岭长城门票，颐和园门票<br/>
              2、北京全程的交通费，路程较远<br/>
              3、还包含特色客栈的住宿（条件舒适、位置极佳，交通方便）<br/>
              4、全程优秀国证导游服务费（真真很细心、服务周到）
            </p>

            <p>
              <img
                src="https://dj-1309972557.file.myqcloud.com/uploads/images/userfiles/58988/202511/20251113/1a8e06e3cda12c123a38f139d4fbe15f.jpg"
                alt="图片"
                style={{ width: '100%', maxWidth: '705px', height: 'auto', display: 'block', margin: '15px 0' }}
              />
            </p>

            <p>个人觉得这趟北京旅游旅游很实惠,很自由,很开心，全程安排的很细致，当时我是打算给她一点小费的，但是她太正直了拒绝了，她说我实在是想感谢她就帮她做做宣传就是最好的了，正好看见这攻略，写的很实在，就顺带提一下，这个真真真的很好</p>

            {/* Comment Info */}
            <div style={{
              borderTop: '1px solid #eee',
              paddingTop: '10px',
              marginTop: '15px',
              color: '#999',
              fontSize: '13px'
            }}>
              <span style={{ color: '#C41E3A' }}>1条评论</span> | <span>收藏 0</span> | 发布于 3天前
            </div>

            {/* Reply Section */}
            <div style={{ marginTop: '15px' }}>
              <div style={{
                borderTop: '1px solid #eee',
                padding: '10px 0',
                display: 'flex',
                gap: '10px'
              }}>
                <img
                  src="https://dj-1309972557.file.myqcloud.com/uploads/userfiles/1/images/avatar/1-2206101144492.jpg"
                  alt="明月光"
                  style={{ width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0 }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '13px' }}>明月光</span>
                    <span style={{ backgroundColor: '#ffd700', padding: '2px 6px', borderRadius: '3px', fontSize: '10px' }}>Lv.19</span>
                    <span style={{ color: '#27ae60', fontSize: '12px' }}>追问</span>
                    <span style={{ fontSize: '11px', color: '#999' }}>5天前</span>
                  </div>
                  <div style={{ fontSize: '13px', lineHeight: '1.5', color: '#666' }}>
                    我们当时也是找真真，本来一开始我们打算自己玩的，但是去过的同学给我推荐了真真，告诉我找个人带着玩比较好。去北京就是冲着那个八达岭长城去的，真的是幸好提前联系了真真给我们订好了票，因为到了北京才知道八达岭长城需要提前几天定票才可以的，每天的人数是限量的，很多人去了山下都不能上即刻上去，要排队买票，还不一定买得到。我心里一直在小窃喜，哈哈哈......果然去旅游就要找专业人士带着玩，不然就搞砸这次旅行了，但最让我惊憾的还是长城的雄浑壮阔，终生难忘！
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '20px',
          marginTop: '30px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#C41E3A', marginBottom: '15px' }}>
            北京四季福旅行社
          </div>

          <div style={{ marginBottom: '15px' }}>
            <img
              src="/素材/wechat-qr.png"
              alt="微信二维码"
              style={{ width: '150px', height: 'auto', borderRadius: '4px' }}
            />
          </div>

          <div style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
            扫描二维码添加真真微信
          </div>

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ backgroundColor: '#fff', padding: '12px 20px', borderRadius: '6px' }}>
              <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>📱 微信 / WhatsApp</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>{guideWechatId}</div>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>WhatsApp: {guideWhatsApp}</div>
              <button
                onClick={() => copyToClipboard(guideWechatId)}
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#C41E3A',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '12px',
                  cursor: 'pointer'
                }}
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

          <div style={{
            marginTop: '15px',
            fontSize: '13px',
            color: '#666',
            padding: '10px',
            backgroundColor: '#fff5e5',
            borderRadius: '6px'
          }}>
            🌟 咨询是免费的！添加好友即可免费获取行程规划 + 报价
          </div>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          padding: '20px',
          color: '#999',
          fontSize: '12px',
          borderTop: '1px solid #eee',
          marginTop: '20px'
        }}>
          <div>专注北京旅游 · 十年品质服务 · 50,000+游客选择</div>
          <div style={{ marginTop: '5px' }}>© 2024 北京四季福旅行社 All Rights Reserved</div>
        </div>
      </div>

      {/* Right Sidebar - Fixed */}
      <div style={{
        position: 'fixed',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '160px',
        backgroundColor: '#fff',
        boxShadow: '0 0 20px rgba(139, 139, 183, 0.21)',
        borderRadius: '8px',
        padding: '15px 10px',
        zIndex: 1000
      }}>
        {/* QR Code */}
        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
          <img
            src="/素材/wechat-qr.png"
            alt="微信二维码"
            style={{ width: '120px', height: 'auto', borderRadius: '4px', margin: '0 auto' }}
          />
          <div style={{ fontSize: '11px', color: '#666', marginTop: '5px' }}>微信咨询</div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #eee', margin: '10px 0' }}></div>

        {/* Phone */}
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <div style={{ fontSize: '11px', color: '#999', marginBottom: '3px' }}>电话/微信</div>
          <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#C41E3A' }}>{guideWechatId}</div>
        </div>

        {/* WhatsApp */}
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <div style={{ fontSize: '11px', color: '#999', marginBottom: '3px' }}>WhatsApp</div>
          <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#25D366' }}>{guideWhatsApp}</div>
        </div>

        {/* Email */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '11px', color: '#999', marginBottom: '3px' }}>邮箱</div>
          <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#666', wordBreak: 'break-all' }}>{guideEmail}</div>
        </div>
      </div>
    </div>
  );
}
