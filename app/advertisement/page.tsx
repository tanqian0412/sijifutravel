'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function AdvertisementPage() {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const guideWechatId = '18618119767';
  const guideEmail = 'a18618119767@163.com';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const content = `我是香港的游客，刚刚从北京旅游回来，那边景色真的非常美，故宫博物院、八达岭长城、圆明园、颐和园、天坛公园、奥林匹克体育中心、清华北大等精华景点都玩遍了，还品尝了北京烤鸭、炸酱面、豆汁儿等特色小吃，全程我们的相机和GoPro都停不下来。和大家分享下游玩北京的经验，相信对于第一次去北京玩的朋友一定会有很大帮助。

推荐北京本地金牌导游瑶瑶(人美踏实靠谱 人称-百事通)：瑶瑶的微信（WeChat）ID:18618119767（点击微信ID号复制添加好友）。特别是在乎酒店的旅友们，一定要加瑶瑶，他们安排的酒店都在三环内！

瑶瑶做了好多年的旅游接待，非常专业，经常组团带团旅游，想要去北京玩得省心省钱的朋友，可以加她的微信  18618119767（点击微信ID号复制 去添加微信），反正加了问线路行程又不要钱！记得和她说是熟人介绍的哦，这样不仅可以免费定制行程，还可以帮买机票 ！

`;

  const fullContent = `我是香港的游客，刚刚从北京旅游回来，那边景色真的非常美，故宫博物院、八达岭长城、圆明园、颐和园、天坛公园、奥林匹克体育中心、清华北大等精华景点都玩遍了，还品尝了北京烤鸭、炸酱面、豆汁儿等特色小吃，全程我们的相机和GoPro都停不下来。和大家分享下游玩北京的经验，相信对于第一次去北京玩的朋友一定会有很大帮助。

推荐北京本地金牌导游瑶瑶(人美踏实靠谱 人称-百事通)：瑶瑶的微信（WeChat）ID:18618119767（点击微信ID号复制添加好友）。特别是在乎酒店的旅友们，一定要加瑶瑶，他们安排的酒店都在三环内！

瑶瑶做了好多年的旅游接待，非常专业，经常组团带团旅游，想要去北京玩得省心省钱的朋友，可以加她的微信  18618119767（点击微信ID号复制 去添加微信），反正加了问线路行程又不要钱！记得和她说是熟人介绍的哦，这样不仅可以免费定制行程，还可以帮买机票 ！

加上瑶瑶微信时，她会给每个人赠送了一份2025年【最新北京景点旅游攻略】的电子文档，非常接地气，为我们的旅游做好了足够的准备！

瑶瑶说去北京一定要玩这一条经典线路，我把瑶瑶根据我的意向景区安排的五天四晚行程发出来参考下：

D1：上午抵达北京，瑶瑶安排接机（24小时都可以接），入住饭店，自由活动，推荐，前门大街，王府井小吃街，西单，东单，三里屯等等....
宿：北京
餐：自理

D2：天安门广场-毛主席纪念堂—故宫博物院－天坛公园-什刹海
宿：北京
餐：早、中(正宗京菜）

D3：八达岭长城深度游－-奥林匹克公园（外观鸟巢、水立方）
宿:  北京
餐：早、中（烤鸭餐）

D4：颐和园深游-圆明园-车览清北
住：北京
餐：早、中

D5：回程，依回程车次时间，统一安排送站/送机，返回温馨的家
餐：早餐

本地导游瑶瑶的微信：18618119767(👈点击微信ID复制，添加微信 免费领取行程+报价）

也可以发送邮件给瑶瑶，瑶瑶的邮箱是：a18618119767@163.com

出行必备

证件类：带好身份证（大部分景点都需要）护照，台胞证，港澳通行证，有学生证的必带，大部分景点是半票。

药品类：晕船药、肠胃药、创可贴、抗过敏药

自拍杆、保湿喷雾、美白面膜都可以带上。

充电宝建议带一个，美照拍到一半手机没电可就尴尬了。

省RMB窍门：

第一次去是纯自由行，网上的攻略看的我是一头的雾水，花了很多冤枉钱还不省心！北京各个景点太分散，交通、安排路线也很麻烦，还有酒店预订、景点门票一大堆事情。在第一次去北京的时候，一个偶然的机会认识了一名网红旅游规划师--瑶瑶，她家是专门做北京半自由行的，有北京旅游的内部资源和专业的旅游规划服务，于是上次去的时候就联系她设计了行程旅游方案并陪同带着玩北京，不仅行程酒店全包干，还品尝了很多北京当地特色小吃，重点是只人均花了1880多人民币！强烈推荐一下

瑶瑶 微信：18618119767(👈点击ID号复制或扫描二维码，添加微信 免费领取北京行程+报价+优惠) 咨询是免费的.

特色美食🍲

✓北京烤鸭
✓老北京炸酱面
✓门钉肉饼
✓铜锅涮肉
✓炒肝（不是真的炒，像炖的）
✓豆汁儿（谨慎😰尝试）
✓老北京糖葫芦串

这些瑶瑶统统都可以安排~

避90%的坑

不建议坐公交车，等车难，坐车累，到处堵车

特产：去当地的超市买，不要去司机或导游介绍的地方买，多半是坑！

路边吃饭拉客的不要去，多半是坑等着你跳。

要安排三环内酒店的旅友们可以加一下瑶瑶：18618119767​​​​​​​(👈点击复制添加微信 免费领取北京行程+报价+优惠) 咨询是免费的。

Tips：第一次来北京旅游的宝宝们，担心消费被宰被坑的，建议选瑶瑶的这种定制服务，五天四晚只要1880人民币，尽情玩。而且像八达岭长城这些较远的景区景点，就省去不少烦心事，自己也乐得轻松自在，还包含接送、门票和餐饮、住宿、导游、保险等费用，是非常省心划算的出行方式了，墙裂推荐给懒人宝宝们！！

发了这篇攻略之后，很多人私信我问美女的微信号是多少

个人也强烈推荐去北京找美女帮忙安排吧，我已经亲自体验回来了

我把她的微信发出来，瑶瑶的微信ID：18618119767 （←点击微信号复制添加，免费获取行程跟报价）

楼主温馨提醒: 3分钟看完替您省40%费用，加好友再省30%`;

  return (
    <div style={{
      fontFamily: '"PingFang SC", "Lantinghei SC", "Microsoft YaHei", Arial, "宋体", sans-serif, tahoma',
      backgroundColor: '#fff',
      color: 'rgb(51, 51, 51)',
      fontSize: '14px',
      lineHeight: '24px',
      margin: 0,
      padding: 0
    }}>
      {/* Main Content Container */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 55px 0 0' }}>

        {/* Question Section */}
        <div style={{ marginBottom: '15px' }}>
          <h1 style={{ fontSize: '16px', fontWeight: 700, color: 'rgb(51, 51, 51)', margin: 0, lineHeight: '26px' }}>
            <strong>计划去北京玩5天左右，路线行程怎么安排？费用大概多少？</strong>
          </h1>
          <div style={{ marginTop: '5px', lineHeight: '20px' }}>
            <span style={{ color: '#27ae60' }}>近期想和朋友一起去北京旅行，门票和酒店好订吗？有没有省钱又好玩的行程路线推荐一下？</span>
            <span> 求去过的朋友推荐下适合的线路 感谢！</span>
          </div>
        </div>

        {/* Answer Count */}
        <div style={{ color: '#999', fontSize: '13px', marginBottom: '15px' }}>
          312500个回答
        </div>

        {/* Answer Content */}
        <div style={{ borderTop: '1px solid rgb(235, 240, 241)', paddingTop: '20px' }}>

          {/* Author Info */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', position: 'relative' }}>
            <div style={{ position: 'relative', marginRight: '10px' }}>
              <Image
                src="/素材/yaoyao-avatar.jpg"
                alt="GESH"
                width={40}
                height={40}
                style={{ borderRadius: '50%' }}
              />
              <span style={{
                position: 'absolute',
                bottom: '-2px',
                right: '-2px',
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

            {/* Main Content - Expandable */}
            <div style={{ position: 'relative' }}>
              {!expanded && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '200px',
                  background: 'linear-gradient(transparent, #fff)'
                }} />
              )}

              <div style={{ display: expanded ? 'block' : 'none' }}>
                <p style={{ margin: '10px 0' }}>
                  <strong>【强烈推荐】</strong><strong>北京旅游超全攻略！5日游良心不踩坑！</strong>
                </p>

                <p style={{ color: '#000', marginLeft: '20px' }}>
                  我是香港的游客，刚刚从北京旅游回来，那边景色真的非常美，故宫博物院、八达岭长城、圆明园、颐和园、天坛公园、奥林匹克体育中心、清华北大等精华景点都玩遍了，还品尝了北京烤鸭、炸酱面、豆汁儿等特色小吃，全程我们的相机和GoPro都停不下来。和大家分享下游玩北京的经验，相信对于第一次去北京玩的朋友一定会有很大帮助。
                </p>

                <p style={{ margin: '10px 0' }}>
                  <strong>
                    <span style={{ color: '#000' }}>推荐北京本地金牌导游</span>
                    <span style={{ color: '#ff0000' }}>瑶瑶</span>
                    <span style={{ color: '#000' }}>(人美踏实靠谱 人称-百事通)：</span>
                    <span style={{ color: '#ff0000', textDecoration: 'underline' }}>瑶瑶的微信（WeChat）ID:18618119767</span>
                    <span style={{ color: '#2ecc71' }}>（点击微信ID号复制添加好友）。</span>
                    <span style={{ color: '#ff0000' }}>特别是在乎酒店的旅友们，一定要加瑶瑶，他们安排的酒店都在三环内！</span>
                  </strong>
                </p>

                {/* QR Code Image */}
                <div style={{ margin: '15px 0' }}>
                  <Image
                    src="/素材/yaoyao-qr.jpg"
                    alt="微信二维码"
                    width={705}
                    height={935}
                    style={{ width: '100%', height: 'auto', maxWidth: '705px' }}
                  />
                </div>

                <p style={{ margin: '10px 0' }}>
                  <span style={{ color: '#000' }}>瑶瑶做了好多年的旅游接待，非常专业，经常组团带团旅游，想要去北京玩得省心省钱的朋友，可以加她的微信  </span>
                  <span style={{ color: '#ff0000', textDecoration: 'underline' }}><strong>18618119767</strong></span>
                  <span style={{ color: '#2ecc71' }}><strong>（点击微信ID号复制 去添加微信）</strong></span>
                  <span style={{ color: '#000' }}>，反正加了问线路行程又不要钱！记得和她说是熟人介绍的哦，这样不仅可以</span>
                  <span style={{ color: '#2ecc71' }}><strong>免费定制行程</strong></span>
                  <span style={{ color: '#000' }}>，<strong>还可以帮买机票 </strong></span>
                  <span style={{ color: '#2c3e50' }}>！</span>
                </p>

                {/* Guide Intro Image */}
                <div style={{ margin: '15px 0' }}>
                  <Image
                    src="/素材/guide-intro.jpg"
                    alt="导游介绍"
                    width={705}
                    height={705}
                    style={{ width: '100%', height: 'auto', maxWidth: '705px' }}
                  />
                </div>

                <p>&nbsp;</p>

                {/* Section 1 */}
                <p style={{ color: '#e67e22' }}><strong>一、我的北京游玩经历：</strong></p>

                <p style={{ marginLeft: '20px' }}>
                  <strong><span>和朋友从香港出发，去北京玩了5天4晚，整个吃住行都是由瑶瑶安排妥当</span></strong>，<strong><span>全程的行程景点、住宿、吃饭、门票、车等都是提前安排好了的，很省心！5天这些吃住行门票加一起，瑶瑶给了我们一个早鸟优惠套餐价格，人均只</span><span style={{ color: '#ff0000' }}>花了1880人民币</span><span>，这也是我为什么推荐去</span>北京<span><strong>的原因</strong>，真的是省心又省钱，还玩的好，吃的好，住的好。</span></strong>
                </p>

                <p style={{ color: '#3366ff' }}><strong>花费：人均1880人民币（我是提前预订的，不然很多票都预约不到）</strong></p>
                <p style={{ color: '#3366ff' }}><strong>时间：5天4晚</strong></p>
                <p style={{ color: '#3366ff' }}><strong>包含：1.机场接机，全程交通（豪华商务旅游车，舒适不怕晕车），专车专导；（这点很关键，因为自己安排交通坐车很麻烦）</strong></p>
                <p style={{ color: '#3366ff' }}><strong>2.一线星级酒店住宿，景点门票，每日用餐、导游、旅游车、等，这个真的是物超所值！</strong></p>

                <p style={{ marginLeft: '20px' }}>
                  如果大家想去北京旅游，推荐加一下当地导游<span style={{ color: '#ff0000' }}>瑶瑶</span>的微信(人很<span style={{ color: '#ff0000' }}>实在靠谱</span>)提前了解一下行程规划，她可以根据你的需求，比如说想去哪些景点啊、想吃啥玩啥、怎么玩啊，都可以帮你解答，还可以免费定制几条旅游线路，也省的自己到处找资料做攻略，就是个行走的北京攻略，哈哈~她的微信：<strong><span style={{ color: '#ff0000' }}>18618119767</span><span style={{ color: '#2ecc71' }}>(👈点击复制，添加微信 免费领取北京行程+报价) 咨询是免费的。</span></strong>
                </p>

                <p style={{ margin: '10px 0' }}>
                  <span>加上</span><span style={{ color: '#ff0000' }}>瑶瑶</span>微信时，她会给每个人赠送了一份2025年【最新北京景点旅游攻略】的电子文档，非常接地气，为我们的旅游做好了足够的准备！
                </p>

                {/* Lazy Image 1 */}
                <div style={{ margin: '15px 0' }}>
                  <Image
                    src="/素材/lazy-img1.jpg"
                    alt="旅游攻略"
                    width={705}
                    height={470}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                <p style={{ color: '#ff0000' }}>
                  <strong>瑶瑶</strong>说去北京一定要玩这一条经典线路，我把瑶瑶根据我的意向景区安排的<span style={{ color: '#ff0000' }}>五天四晚行程</span>发出来参考下：
                </p>

                {/* Itinerary */}
                <div style={{ margin: '15px 0' }}>
                  <p><span style={{ color: '#27ae60' }}>❤️D1：</span><span style={{ color: '#2ecc71' }}>上午抵达北京，瑶瑶安排接机（24小时都可以接），入住饭店，自由活动，推荐，前门大街，王府井小吃街，西单，东单，三里屯等等....</span></p>
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

                <p>本地导游<span style={{ color: '#ff0000' }}><strong>瑶瑶</strong></span>的微信：<span style={{ color: '#ff0000' }}><strong>18618119767</strong></span><span style={{ color: '#16a085' }}>(👈点击微信ID复制，添加微信 免费领取行程+报价）</span></p>

                <p>也可以发送邮件给瑶瑶，瑶瑶的邮箱是：<strong><span style={{ color: '#ff0000' }}>a18618119767@163.com</span></strong></p>

                {/* Section: 出行必备 */}
                <p><strong>出行必备</strong></p>
                <p>证件类：带好身份证（大部分景点都需要）护照，台胞证，港澳通行证，有学生证的必带，大部分景点是半票。</p>
                <p>药品类：晕船药、肠胃药、创可贴、抗过敏药</p>
                <p>自拍杆、保湿喷雾、美白面膜都可以带上。充电宝建议带一个，美照拍到一半手机没电可就尴尬了。</p>

                {/* Lazy Image 2 */}
                <div style={{ margin: '15px 0' }}>
                  <Image
                    src="/素材/lazy-img2.jpg"
                    alt="出行必备"
                    width={705}
                    height={470}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                {/* Section: 省RMB窍门 */}
                <p><strong>省RMB窍门：</strong></p>
                <p>第一次去是纯自由行，网上的攻略看的我是一头的雾水，花了很多冤枉钱还不省心！北京各个景点太分散，交通、安排路线也很麻烦，还有酒店预订、景点门票一大堆事情。在第一次去北京的时候，一个偶然的机会认识了一名网红旅游规划师--瑶瑶，她家是专门做北京半自由行的，有北京旅游的内部资源和专业的旅游规划服务，于是上次去的时候就联系她设计了行程旅游方案并陪同带着玩北京，不仅行程酒店全包干，还品尝了很多北京当地特色小吃，重点是只人均花了1880多人民币！强烈推荐一下</p>

                <p>瑶瑶 微信：<span style={{ color: '#ff0000' }}><strong>18618119767</strong></span><span style={{ color: '#1abc9c' }}>(👈点击ID号复制或扫描二维码，添加微信 免费领取北京行程+报价+优惠) 咨询是免费的.</span></p>

                {/* Section: 特色美食 */}
                <p><strong>特色美食🍲</strong></p>
                <p>✓北京烤鸭<br/>✓老北京炸酱面<br/>✓门钉肉饼<br/>✓铜锅涮肉<br/>✓炒肝（不是真的炒，像炖的）<br/>✓豆汁儿（谨慎😰尝试）<br/>✓老北京糖葫芦串</p>
                <p>这些瑶瑶统统都可以安排~</p>

                {/* Lazy Image 3 - Food */}
                <div style={{ margin: '15px 0' }}>
                  <Image
                    src="/素材/lazy-img3.jpg"
                    alt="特色美食"
                    width={705}
                    height={470}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                {/* Section: 避坑 */}
                <p><strong>避90%的坑</strong></p>
                <p>不建议坐公交车，等车难，坐车累，到处堵车</p>
                <p>特产：去当地的超市买，不要去司机或导游介绍的地方买，多半是坑！</p>
                <p>路边吃饭拉客的不要去，多半是坑等着你跳。</p>

                <p><span style={{ color: '#ff0000' }}><strong>要安排三环内酒店的旅友们可以加一下瑶瑶：18618119767</strong></span><span style={{ color: '#16a085' }}>(👈点击复制添加微信 免费领取北京行程+报价+优惠) 咨询是免费的。</span></p>

                {/* Lazy Images 4 & 5 */}
                <div style={{ margin: '15px 0' }}>
                  <Image
                    src="/素材/lazy-img4.jpg"
                    alt="图片4"
                    width={705}
                    height={470}
                    style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
                  />
                  <Image
                    src="/素材/lazy-img5.jpg"
                    alt="图片5"
                    width={705}
                    height={470}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                {/* Tips Section */}
                <p><span>Tips：第一次来北京旅游的宝宝们，担心消费被宰被坑的，建议选</span>瑶瑶<span>的这种定制服务，五天四晚只要1880人民币，尽情玩。而且像八达岭长城这些较远的景区景点，就省去不少烦心事，自己也乐得轻松自在，还包含接送、门票和餐饮、住宿、导游、保险等费用，是非常省心划算的出行方式了，墙裂推荐给懒人宝宝们！！</span></p>

                <p><span>发了这篇攻略之后，很多人私信我问</span>美女<span>的微信号是多少</span></p>
                <p><span>个人也强烈推荐去</span>北京<span>找</span>美女<span>帮忙安排吧，我已经亲自体验回来了</span></p>
                <p><span>我把她的微信发出来，</span>瑶瑶的微信ID：<span style={{ color: '#ff0000' }}><strong>18618119767</strong></span><span style={{ color: '#ff0000' }}><strong> </strong></span><span>（</span><span style={{ color: '#16a085' }}>←点击微信号复制添加，免费获取行程跟报价</span><span>）</span></p>

                <p style={{ color: '#d35400' }}><strong>楼主温馨提醒: </strong><span style={{ color: '#16a085' }}>3分钟看完替您省40%费用，加好友再省30%</span></p>
              </div>

              {/* Expand Button */}
              <div
                onClick={() => setExpanded(!expanded)}
                style={{
                  marginTop: expanded ? '10px' : '0',
                  padding: '10px',
                  textAlign: 'center',
                  color: '#C41E3A',
                  cursor: 'pointer',
                  backgroundColor: expanded ? 'transparent' : 'linear-gradient(transparent, #fff)'
                }}
              >
                {expanded ? '收起全部' : '展开全部'}
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
          </div>
        </div>

        {/* Contact Section */}
        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '20px',
          marginTop: '20px',
          borderRadius: '8px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '15px' }}>
            <strong style={{ color: '#C41E3A', fontSize: '16px' }}>北京四季福旅行社</strong>
          </div>

          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <Image
                src="/素材/yaoyao-qr.jpg"
                alt="微信二维码"
                width={120}
                height={160}
                style={{ borderRadius: '4px' }}
              />
              <div style={{ fontSize: '12px', marginTop: '5px' }}>扫描添加瑶瑶</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ backgroundColor: '#fff', padding: '12px 20px', borderRadius: '6px' }}>
                <div style={{ fontSize: '12px', color: '#666' }}>📱 微信 / WhatsApp</div>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>{guideWechatId}</div>
                <button
                  onClick={() => copyToClipboard(guideWechatId)}
                  style={{
                    marginTop: '8px',
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
                <div style={{ fontSize: '12px', color: '#666' }}>📧 邮箱</div>
                <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>{guideEmail}</div>
              </div>
            </div>
          </div>

          <div style={{
            marginTop: '15px',
            textAlign: 'center',
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
    </div>
  );
}
