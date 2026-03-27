'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function AdvertisementPage() {
  const [copied, setCopied] = useState(false);

  const wechatId = 'ziyue11-15';
  const phone = '+86 186 0078 9081';
  const email = '2584144797@qq.com';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      fontFamily: '"PingFang SC", "Microsoft YaHei", sans-serif',
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
              专注北京旅游 · 十年品质服务
            </div>
          </div>
        </div>

        <h1 style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '15px',
          lineHeight: '1.6'
        }}>
          下周计划去北京玩，行程路线要怎样安排？最好能深度游玩-长城、故宫等
        </h1>

        <div style={{
          border: '1px solid #ffe3b7',
          backgroundColor: '#fff5e5',
          padding: '15px 20px',
          lineHeight: '1.8',
          color: '#333',
          borderRadius: '6px',
          marginBottom: '20px'
        }}>
          <strong>Tips：</strong><br/>
          <strong>北京</strong>作为我国的首都，这里有巍峨的长城，庄严的故宫，神秘的清华北大，还有令人垂涎三尺的各种小吃，在这里你可以卸下所有烦恼，放慢脚步，体验一场震撼人心的旅程~
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
            【强烈推荐】北京旅游超全攻略！5日游良心不踩坑！
          </div>
          <div style={{ fontSize: '13px', lineHeight: '1.8', textAlign: 'left' }}>
            刚从北京旅游回来，那边景色真的非常美，故宫博物院、八达岭长城、圆明园、颐和园、天坛公园、奥林匹克体育中心、清华北大等精华景点都玩遍了，还品尝了北京烤鸭、炸酱面、豆汁儿等特色小吃，全程我们的相机和GoPro都停不下来。
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
          一、我的北京游玩经历
        </h2>

        <p style={{ lineHeight: '1.8', marginBottom: '15px', fontSize: '14px' }}>
          和朋友从各地出发，去北京玩了5天4晚，整个吃住行都是由四季福旅行社安排妥当，全程的行程景点、住宿、吃饭、门票、车等都是提前安排好了的，很省心！5天这些吃住行门票加一起，四季福给了我们一个早鸟优惠套餐价格，<strong style={{ color: '#C41E3A' }}>人均只花了1880人民币</strong>，这也是我为什么推荐去北京的原因，真的是省心又省钱，还玩的好，吃的好，住的好。
        </p>

        <div style={{
          backgroundColor: '#f8f8f8',
          padding: '15px',
          borderRadius: '6px',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '14px' }}>
            <div><strong>花费：</strong>人均1880人民币</div>
            <div><strong>时间：</strong>5天4晚</div>
            <div><strong>包含：</strong>接机、景点门票、酒店、每日用餐、导游、旅游车</div>
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
          二、精选行程推荐
        </h2>

        <div style={{ marginBottom: '20px' }}>
          <div style={{
            backgroundColor: '#fff5e5',
            padding: '12px 15px',
            borderRadius: '6px',
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <strong>D1：</strong>抵达北京 → 接机入住酒店 → 自由活动（推荐前门大街、王府井小吃街）
            </div>
          </div>
          <div style={{
            backgroundColor: '#fff5e5',
            padding: '12px 15px',
            borderRadius: '6px',
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <strong>D2：</strong>天安门广场 → 毛主席纪念堂 → 故宫博物院 → 天坛公园 → 什刹海
            </div>
          </div>
          <div style={{
            backgroundColor: '#fff5e5',
            padding: '12px 15px',
            borderRadius: '6px',
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <strong>D3：</strong>八达岭长城深度游 → 奥林匹克公园（外观鸟巢、水立方）
            </div>
          </div>
          <div style={{
            backgroundColor: '#fff5e5',
            padding: '12px 15px',
            borderRadius: '6px',
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <strong>D4：</strong>颐和园深度游 → 圆明园 → 车览清华北大
            </div>
          </div>
          <div style={{
            backgroundColor: '#fff5e5',
            padding: '12px 15px',
            borderRadius: '6px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <strong>D5：</strong>睡到自然醒 → 自由活动 → 送站/送机，返回温馨的家
            </div>
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
          三、特色美食推荐
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          marginBottom: '20px'
        }}>
          {['北京烤鸭', '老北京炸酱面', '门钉肉饼', '铜锅涮肉', '炒肝', '豆汁儿'].map((food) => (
            <div key={food} style={{
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
          四、为什么选择四季福
        </h2>

        <div style={{ marginBottom: '20px' }}>
          {[
            '10年专业北京旅游服务经验',
            '50,000+游客选择，口碑保证',
            '专业中英文双语导游',
            '24小时接机服务，随时出发',
            '全程无购物、无自费',
            '免费定制专属行程'
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
                backgroundColor: '#C41E3A',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px'
              }}>
                ✓
              </span>
              <span style={{ fontSize: '14px' }}>{item}</span>
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
          五、联系方式
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '15px',
          alignItems: 'start'
        }}>
          {/* WeChat QR Code */}
          <div style={{
            backgroundColor: '#f8f8f8',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: '#333'
            }}>
              扫描二维码添加微信
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
                src="/素材/wechat-qr.png"
                alt="微信二维码"
                width={150}
                height={150}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div style={{ fontSize: '12px', color: '#999' }}>
              微信号：{wechatId}
            </div>
          </div>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{
              backgroundColor: '#f8f8f8',
              padding: '15px',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>📱 电话 / WhatsApp</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>{phone}</div>
            </div>

            <div style={{
              backgroundColor: '#f8f8f8',
              padding: '15px',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>📧 邮箱</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>{email}</div>
            </div>

            <div style={{
              backgroundColor: '#f8f8f8',
              padding: '15px',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>💬 微信ID</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>{wechatId}</div>
              <button
                onClick={() => copyToClipboard(wechatId)}
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
          </div>
        </div>

        <div style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#fff5e5',
          borderRadius: '8px',
          fontSize: '13px',
          color: '#666',
          textAlign: 'center'
        }}>
          🌟 咨询是免费的！添加好友即可免费获取行程规划 + 报价
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
        <div>专注北京旅游 · 10年品质服务 · 50,000+游客选择</div>
      </div>
    </div>
  );
}
