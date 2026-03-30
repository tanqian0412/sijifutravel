'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function AdvertisementPage() {
  const [copied, setCopied] = useState(false);
  const [showReplies, setShowReplies] = useState<{[key: number]: boolean}>({});

  const guideWechatId = '18195895772';
  const guideEmail = '18195895772@163.com';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleReplies = (index: number) => {
    setShowReplies(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div style={{
      fontFamily: '"PingFang SC", "Microsoft YaHei", "Microsoft JhengHei", sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      padding: '20px',
      color: '#333'
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto 20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #C41E3A, #A01830)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold'
          }}>
            福
          </div>
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#C41E3A' }}>
              北京四季福旅行社
            </div>
            <div style={{ fontSize: '12px', color: '#999' }}>
              專注北京旅遊 · 十年品質服務
            </div>
          </div>
        </div>

        <h1 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '15px',
          lineHeight: '1.6'
        }}>
          計劃去北京玩5天左右，路線行程怎麼安排？費用大概多少？
        </h1>

        <div style={{ fontSize: '13px', color: '#999', marginBottom: '15px' }}>
          近期想和朋友一起去北京旅行，門票和酒店好訂嗎？有沒有省錢又好玩的行程路線推薦一下？求去過的朋友推薦下適合的線路 感謝！
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#999' }}>
          <span>312500個回答</span>
          <span style={{ color: '#C41E3A', fontWeight: 'bold' }}>GESH</span>
          <span style={{ backgroundColor: '#ffd700', padding: '2px 6px', borderRadius: '3px', fontSize: '10px' }}>Lv.30</span>
        </div>

        <div style={{
          border: '1px solid #ffe3b7',
          backgroundColor: '#fff5e5',
          padding: '15px 20px',
          lineHeight: '1.8',
          color: '#333',
          borderRadius: '6px',
          marginTop: '15px',
          fontSize: '14px'
        }}>
          <strong>Tips：</strong><br/>
          北京作為我國的首都，這里有巍峨的長城⛰️，莊嚴的故宮🏯，神秘的清華北大🏢，還有令人垂涎三尺的各種小吃🍝，在這里你可以卸下所有煩惱，🥰放慢腳步，體驗一場震撼人心的旅程～🧡
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto 20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #C41E3A, #A01830)',
          color: 'white',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '14px', marginBottom: '10px', opacity: 0.9 }}>
            【強烈推薦】北京旅遊超全攻略！5日遊良心不踩坑！
          </div>
          <div style={{ fontSize: '13px', lineHeight: '1.8', textAlign: 'left' }}>
            我是香港的遊客，剛剛從北京旅遊回來，那邊景色真的非常美，故宮博物院、八達嶺長城、圓明園、頤和園、天壇公園、奧林匹克體育中心、清華北大等精華景點都玩遍了，還品嘗了北京烤鴨、炸醬面、豆汁兒等特色小吃，全程我們的相機和GoPro都停不下來。和大家分享下游玩北京的經驗，相信對於第一次去北京玩的朋友一定會有很大幫助。
          </div>
        </div>

        {/* Guide Info */}
        <div style={{
          backgroundColor: '#f8f8f8',
          padding: '15px',
          borderRadius: '8px',
          marginBottom: '20px',
          display: 'flex',
          gap: '15px',
          alignItems: 'center'
        }}>
          <div style={{ position: 'relative' }}>
            <Image
              src="/素材/guide-avatar.jpg"
              alt="導遊頭像"
              width={60}
              height={60}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              bottom: '-5px',
              right: '-5px',
              backgroundColor: '#C41E3A',
              color: 'white',
              fontSize: '10px',
              padding: '2px 6px',
              borderRadius: '10px'
            }}>
              導遊
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
              推薦北京本地金牌導遊小伍
              <span style={{ fontSize: '12px', color: '#999', fontWeight: 'normal' }}>（人美踏實靠譜 人稱-百事通）</span>
            </div>
            <div style={{ fontSize: '13px', color: '#666' }}>
              小伍做了好多年的旅遊接待，非常專業，經常組團帶團旅遊，想要去北京玩得省心省錢的朋友，可以加她的微信
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '15px',
          marginBottom: '20px'
        }}>
          {/* WeChat QR */}
          <div style={{
            backgroundColor: '#f8f8f8',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '15px' }}>
              掃描二維碼添加微信
            </div>
            <div style={{
              width: '150px',
              height: '150px',
              margin: '0 auto 15px',
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <Image
                src="/素材/wechat-qr.jpg"
                alt="微信二維碼"
                width={150}
                height={150}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div style={{ fontSize: '12px', color: '#999' }}>
              微訊號：{guideWechatId}
            </div>
          </div>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{
              backgroundColor: '#f8f8f8',
              padding: '15px',
              borderRadius: '8px',
              flex: 1
            }}>
              <div style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>📱 微信 / WhatsApp</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>{guideWechatId}</div>
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
                {copied ? '已複製！' : '複製微信號'}
              </button>
            </div>

            <div style={{
              backgroundColor: '#f8f8f8',
              padding: '15px',
              borderRadius: '8px',
              flex: 1
            }}>
              <div style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>📧 郵箱</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>{guideEmail}</div>
            </div>
          </div>
        </div>

        <div style={{
          padding: '15px',
          backgroundColor: '#fff5e5',
          borderRadius: '8px',
          fontSize: '13px',
          color: '#666',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          🌟 咨詢是免費的！加好友即可免費獲取行程規劃 + 報價
        </div>

        <h2 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '15px',
          paddingBottom: '10px',
          borderBottom: '2px solid #C41E3A'
        }}>
          一、我的北京遊玩經歷
        </h2>

        <p style={{ lineHeight: '1.8', marginBottom: '15px', fontSize: '14px' }}>
          和朋友從香港出發，去北京玩了5天4晚，整個吃住行都是由小伍安排妥當，全程的行程景點、住宿、吃飯、門票、車等都是提前安排好了的，很省心！5天這些吃住行門票加一起，小伍給了我們一個早鳥優惠套餐價格，<strong style={{ color: '#C41E3A' }}>人均只花了1880人民幣</strong>，這也是我為什麼推薦去北京的原因，真的是省心又省錢，還玩的好，吃的好，住的好。
        </p>

        <div style={{
          backgroundColor: '#f8f8f8',
          padding: '15px',
          borderRadius: '6px',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '14px' }}>
            <div><strong>花費：</strong>人均1880人民幣</div>
            <div><strong>時間：</strong>5天4晚</div>
            <div><strong>包含：</strong>接機、景點門票、酒店、每日用餐、導遊、旅遊車</div>
          </div>
        </div>

        <h2 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '15px',
          paddingBottom: '10px',
          borderBottom: '2px solid #C41E3A'
        }}>
          二、精选行程推薦
        </h2>

        <div style={{ marginBottom: '20px' }}>
          {[
            { day: 'D1', content: '上午抵達北京，小伍安排接機（24小時都可以接），入住飯店，自由活動，推薦，前門大街，王府井小吃街，西單，東單，三里屯等等....\n宿：北京\n餐：自理' },
            { day: 'D2', content: '天安門廣場-毛主席紀念堂—故宮博物院－天壇公園-什剎海\n宿：北京\n餐：早、中(正宗京菜）' },
            { day: 'D3', content: '八達嶺長城深度遊－-奧林匹克公園（外觀鳥巢、水立方）\n宿: 北京\n餐：早、中（烤鴨餐）' },
            { day: 'D4', content: '頤和園深遊-圓明園-車覽清北\n住：北京\n餐：早、中' },
            { day: 'D5', content: '回程，依回程車次時間，統一安排送站/送機，返回溫馨的家\n餐：早餐' }
          ].map((item, index) => (
            <div key={index} style={{
              backgroundColor: '#fff5e5',
              padding: '12px 15px',
              borderRadius: '6px',
              marginBottom: '10px',
              display: 'flex',
              gap: '10px',
              alignItems: 'flex-start'
            }}>
              <span style={{
                backgroundColor: '#C41E3A',
                color: 'white',
                padding: '4px 10px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 'bold',
                flexShrink: 0
              }}>
                {item.day}
              </span>
              <div style={{ fontSize: '13px', lineHeight: '1.6', whiteSpace: 'pre-line' }}>{item.content}</div>
            </div>
          ))}
        </div>

        <h2 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '15px',
          paddingBottom: '10px',
          borderBottom: '2px solid #C41E3A'
        }}>
          三、出行必備
        </h2>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ marginBottom: '15px' }}>
            <strong style={{ color: '#C41E3A' }}>證件類：</strong>
            <span style={{ fontSize: '14px' }}>帶好身份證（大部分景點都需要）護照，台胞證，港澳通行證，有學生證的必帶，大部分景點是半票。</span>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <strong style={{ color: '#C41E3A' }}>藥品類：</strong>
            <span style={{ fontSize: '14px' }}>暈船藥、腸胃藥、創可貼、抗過敏藥</span>
          </div>
          <div>
            <strong style={{ color: '#C41E3A' }}>其他：</strong>
            <span style={{ fontSize: '14px' }}>自拍杆、保濕噴霧、美白面膜都可以帶上。充電寶建議帶一個，美照拍到一半手機沒電可就尷尬了。</span>
          </div>
        </div>

        <h2 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '15px',
          paddingBottom: '10px',
          borderBottom: '2px solid #C41E3A'
        }}>
          四、省RMB竅門
        </h2>

        <p style={{ lineHeight: '1.8', marginBottom: '15px', fontSize: '14px' }}>
          第一次去是純自由行，網上的攻略看的我是一頭的霧水，花了很多冤枉錢還不省心！北京各個景點太分散，交通、安排路線也很麻煩，還有酒店預訂，景點門票一大堆事情。在第一次去北京的時候，一個偶然的機會認識了一名網紅旅遊規劃師--小伍，她家是專門做北京半自由行的，有北京旅遊的內部資源和專業的旅遊規劃服務，於是上次去的時候就聯繫她設計了行程旅遊方案並陪同帶著玩北京，不僅行程酒店全包干，還品嘗了很多北京當地特色小吃，重點是只人均花了1880多人民幣！強烈推薦一下
        </p>

        <div style={{
          padding: '15px',
          backgroundColor: '#fff5e5',
          borderRadius: '8px',
          fontSize: '13px',
          color: '#666',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          小伍 微信：{guideWechatId}（👈點擊ID號複製或掃描二維碼，添加微信 免費領取北京行程+報價+優惠）咨詢是免費的.
        </div>

        <h2 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '15px',
          paddingBottom: '10px',
          borderBottom: '2px solid #C41E3A'
        }}>
          五、特色美食🍲
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          marginBottom: '20px'
        }}>
          {['北京烤鴨', '老北京炸醬面', '門釘肉餅', '銅鍋涮肉', '炒肝', '豆汁兒'].map((food, index) => (
            <div key={index} style={{
              backgroundColor: '#fff5e5',
              padding: '10px',
              borderRadius: '6px',
              textAlign: 'center',
              fontSize: '13px'
            }}>
              {food}
            </div>
          ))}
        </div>

        <h2 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '15px',
          paddingBottom: '10px',
          borderBottom: '2px solid #C41E3A'
        }}>
          六、避坑指南
        </h2>

        <div style={{ marginBottom: '20px' }}>
          {[
            { icon: '✕', text: '不建議坐公交車，等車難，坐車累，到處堵車' },
            { icon: '✕', text: '特產：去當地的超市買，不要去司機或導遊介紹的地方買，多半是坑！' },
            { icon: '✕', text: '路邊吃飯拉客的不要去，多半是坑等著你跳。' }
          ].map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 0',
              borderBottom: '1px solid #eee'
            }}>
              <span style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: '#ff4d4f',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px'
              }}>
                {item.icon}
              </span>
              <span style={{ fontSize: '14px' }}>{item.text}</span>
            </div>
          ))}
        </div>

        <div style={{
          padding: '15px',
          backgroundColor: '#fff5e5',
          borderRadius: '8px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#C41E3A', marginBottom: '10px' }}>
            Tips：第一次來北京旅遊的寶寶們
          </div>
          <div style={{ fontSize: '13px', color: '#666', lineHeight: '1.6' }}>
            擔心消費被宰被坑的，建議選小伍的這種定制服務，五天四晚只要1880人民幣，盡情玩。而且像八達嶺長城這些較遠的景區景點，就省去不少煩心事，自己也樂得輕鬆自在，還包含接送、門票和餐飲、住宿、導遊、保險等費用，是非常省心划算的出行方式了，牆裂推薦給懶人寶寶們！！
          </div>
        </div>

        {/* Comments Section */}
        <h2 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '15px',
          paddingBottom: '10px',
          borderBottom: '2px solid #C41E3A'
        }}>
          最新評論（8條）
        </h2>

        <div style={{ marginBottom: '20px' }}>
          {[
            {
              name: '卷卷1',
              level: 'Lv.17',
              avatar: '/素材/avatar-1.jpg',
              time: '5天前',
              content: '攻略做的好詳細啊，剛才看別人的都看暈了，都打算放棄了，看到你的又想去了，正好想帶孩子去北京玩，可以說是很及時了，聽說北京的景區都很大，自己玩的話作為外地人太費腦筋了，我也準備找一下你說的小伍帶我們玩。',
              replies: []
            },
            {
              name: '宋青鵆',
              level: 'Lv.67',
              avatar: '/素材/avatar-2.jpg',
              time: '5天前',
              content: '想下個月5天旅行遊覽北京可否帶我們？',
              replies: [
                {
                  name: 'GES',
                  level: 'Lv.30',
                  avatar: '/素材/guide-avatar.jpg',
                  time: '5天前',
                  content: '當然可以，你可以直接加入小伍微信，她會為你安排詳細的行程，這是客服的微信：18195895772（👈點選複製新增好友（電話微信同號碼奧））咨詢小伍的人很多，不一定及時通過，可以多試幾次~或者發送郵件告訴小伍，郵箱：18195895772@163.com'
                }
              ]
            },
            {
              name: 'LUV 2U',
              level: 'Lv.30',
              avatar: '/素材/avatar-3.jpg',
              time: '5天前',
              content: '你們是什麼時候去的呀，我們打算明年2月份去，不知道天氣怎麼樣？',
              replies: []
            }
          ].map((comment, index) => (
            <div key={index} style={{
              backgroundColor: '#f8f8f8',
              padding: '15px',
              borderRadius: '8px',
              marginBottom: '15px'
            }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <Image
                  src={comment.avatar}
                  alt={comment.name}
                  width={40}
                  height={40}
                  style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{comment.name}</span>
                    <span style={{ backgroundColor: '#ffd700', padding: '2px 6px', borderRadius: '3px', fontSize: '10px' }}>{comment.level}</span>
                    <span style={{ fontSize: '12px', color: '#999' }}>{comment.time}</span>
                  </div>
                  <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#333' }}>
                    {comment.content}
                  </div>

                  {comment.replies.length > 0 && (
                    <div style={{ marginTop: '12px' }}>
                      {showReplies[index] && comment.replies.map((reply, replyIndex) => (
                        <div key={replyIndex} style={{
                          backgroundColor: '#fff',
                          padding: '12px',
                          borderRadius: '6px',
                          marginTop: '8px',
                          display: 'flex',
                          gap: '10px'
                        }}>
                          <Image
                            src={reply.avatar}
                            alt={reply.name}
                            width={32}
                            height={32}
                            style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                          />
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                              <span style={{ fontWeight: 'bold', fontSize: '13px' }}>{reply.name}</span>
                              <span style={{ backgroundColor: '#C41E3A', padding: '2px 6px', borderRadius: '3px', fontSize: '10px', color: 'white' }}>{reply.level}</span>
                              <span style={{ fontSize: '11px', color: '#999' }}>{reply.time}</span>
                            </div>
                            <div style={{ fontSize: '13px', lineHeight: '1.5', color: '#666' }}>
                              {reply.content}
                            </div>
                          </div>
                        </div>
                      ))}
                      <button
                        onClick={() => toggleReplies(index)}
                        style={{
                          marginTop: '8px',
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: '#C41E3A',
                          fontSize: '12px',
                          cursor: 'pointer'
                        }}
                      >
                        {showReplies[index] ? '收起回复' : `展開回復（${comment.replies.length}條）`}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          padding: '15px',
          backgroundColor: '#fff5e5',
          borderRadius: '8px',
          textAlign: 'center',
          fontSize: '13px',
          color: '#666'
        }}>
          樓主溫馨提醒: 3分鐘看完替您省40%費用，加好友再省30%
        </div>
      </div>

      {/* Footer */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '20px',
        color: '#999',
        fontSize: '12px'
      }}>
        <div style={{ marginBottom: '10px' }}>
          <strong style={{ color: '#C41E3A' }}>北京四季福旅行社</strong> © 2024 All Rights Reserved
        </div>
        <div>專注北京旅遊 · 十年品質服務 · 50,000+遊客選擇</div>
      </div>
    </div>
  );
}
