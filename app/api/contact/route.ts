import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, socialMedia, message } = body;

    const pushTitle = '📩 新的客户留言';
    const pushContent = `👤 姓名: ${name || '未填写'}
📱 电话: ${phone || '未填写'}
📧 Email: ${email || '未填写'}
💬 社媒账号: ${socialMedia || '未填写'}

💭 留言内容:
${message || '（未留言）'}`;

    const pushData = { title: pushTitle, content: pushContent };

    const pushUrl1 = 'https://push.showdoc.com.cn/server/api/push/c92916dd79882f7e57e953d205aac5327f2177a5a7faca4e2e6118e8538bc270';
    const pushUrl2 = 'https://push.showdoc.com.cn/server/api/push/a9e1f6eb1d866339b93cbe224e521ac71634844490';

    // Send to both customers simultaneously
    const results = await Promise.all([
      fetch(pushUrl1, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pushData),
      }),
      fetch(pushUrl2, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pushData),
      }),
    ]);

    // Check if at least one succeeded
    const anySuccess = results.some(r => r.ok);
    if (!anySuccess) {
      return NextResponse.json({ success: false, error: 'Push failed' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
