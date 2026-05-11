/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronRight, 
  Info, 
  Clock, 
  FileText, 
  Copy, 
  Wallet, 
  Check, 
  ArrowLeft,
  ExternalLink,
  Share2
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const amount = "1,500.00";
  const currency = "USDT";
  const status = "قيد المعالجة";
  const estimatedDate = "2026-06-01 14:30:00";
  const network = "TRON (TRC20)";
  const address = "T9yD...zW4v";
  const txid = "0x8a7...f9c2";

  // Submission at 1 PM on 2026-05-11
  const submissionTime = "2026-05-11 13:00";
  const reviewTime = "2026-05-11 13:05";

  return (
    <div className="min-h-screen bg-[#0B0E11] text-[#EAECEF] font-sans selection:bg-[#FCD535] selection:text-black overflow-x-hidden" dir="rtl">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0E11] flex items-center justify-between px-4 py-3 border-b border-[#2B3139] max-w-2xl mx-auto">
        <div className="flex items-center gap-4">
          <button className="p-1 hover:bg-[#2B3139] rounded-full transition-colors" id="back_button">
            <ChevronRight size={24} className="text-[#EAECEF]" />
          </button>
          <h1 className="text-lg font-medium">تفاصيل السحب</h1>
        </div>
        <div className="flex items-center gap-4">
          <FileText size={20} className="text-[#707A8A] cursor-pointer hover:text-[#EAECEF]" />
          <Share2 size={20} className="text-[#707A8A] cursor-pointer hover:text-[#EAECEF]" />
        </div>
      </header>

      <main className="max-w-2xl mx-auto pt-16 pb-32 px-4 space-y-6">
        {/* Amount & Status Card */}
        <section className="flex flex-col items-center pt-8 pb-4">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold tracking-tight">{amount}</span>
            <span className="text-lg font-bold text-[#FCD535]">{currency}</span>
          </div>
          
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FCD535]/10 rounded-full">
            <Clock size={14} className="text-[#FCD535]" />
            <span className="text-[#FCD535] text-sm font-medium">{status}</span>
          </div>
        </section>

        {/* Action Timeline - The Core Binance Look */}
        <section className="bg-[#1E2329] rounded-2xl p-5 border border-[#2B3139]/50 shadow-xl">
          <div className="relative">
            {/* Thread line */}
            <div className="absolute right-[11px] top-[14px] bottom-[14px] w-[2px] bg-[#2B3139]" />

            <div className="space-y-10">
              {/* Step 1: Request Submitted */}
              <div className="flex gap-4 relative z-10">
                <div className="w-6 h-6 rounded-full bg-[#0ECB81] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} className="text-black font-bold" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="font-semibold text-[15px]">تم تقديم طلب السحب</p>
                    <span className="text-[11px] text-[#707A8A] font-mono" dir="ltr">{submissionTime}</span>
                  </div>
                  <p className="text-[13px] text-[#707A8A] mt-1">طلب السحب الخاص بك يخضع للمعالجة الآلية.</p>
                </div>
              </div>

              {/* Step 2: System Reviewing - ACTIVE STEP */}
              <div className="flex gap-4 relative z-10">
                <div className="w-6 h-6 rounded-full bg-[#FCD535] flex items-center justify-center shrink-0 mt-0.5">
                  <motion.div
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Clock size={14} className="text-black" />
                  </motion.div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="font-semibold text-[15px] text-[#FCD535]">النظام قيد المراجعة</p>
                    <span className="text-[11px] text-[#707A8A] font-mono" dir="ltr">{reviewTime}</span>
                  </div>
                  <p className="text-[13px] text-[#707A8A] mt-1">يتم الآن مراجعة عملية السحب من أجل ضمان أمان حسابك.</p>
                  
                  <div className="mt-4 p-4 bg-[#2B3139]/50 rounded-xl space-y-2 border border-[#FCD535]/10">
                    <div className="flex items-center gap-2">
                        <Info size={14} className="text-[#FCD535]" />
                        <span className="text-[13px] font-medium text-[#707A8A]">تنبيه الأمان</span>
                    </div>
                    <p className="text-[12px] text-[#707A8A] leading-[1.6]">
                      بناءً على طلب السحب بمبلغ كبير، قد تستغرق المراجعة الأمنية وقتاً إضافياً. الموعد المتوقع للإتمام هو <span className="text-[#EAECEF] font-mono" dir="ltr">01/06/2026 14:30</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3: Withdrawal Successful (Pending) */}
              <div className="flex gap-4 relative z-10 opacity-50">
                <div className="w-6 h-6 rounded-full bg-[#2B3139] flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#707A8A]" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[15px] text-[#707A8A]">تم السحب بنجاح</p>
                  <p className="text-[13px] text-[#707A8A] mt-1">ستصل الأموال فور الانتهاء من مراجعة البلوكشين.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transaction Info Grid */}
        <section className="bg-[#1E2329] rounded-2xl overflow-hidden border border-[#2B3139]/50 shadow-lg">
          <div className="px-5 py-4 border-b border-[#2B3139]/50">
            <h3 className="text-[15px] font-bold">معلومات السحب</h3>
          </div>
          
          <div className="p-5 space-y-5">
            {/* Row 1 */}
            <div className="flex justify-between items-center text-[13px]">
              <span className="text-[#707A8A]">الشبكة</span>
              <span className="font-medium" dir="ltr">{network}</span>
            </div>

            {/* Row 2 */}
            <div className="flex justify-between items-start text-[13px]">
                <span className="text-[#707A8A]">العنوان</span>
                <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity">
                    <span className="text-left font-mono" dir="ltr">{address}</span>
                    <Copy size={14} className="text-[#707A8A]" />
                </div>
            </div>

            {/* Row 3 */}
            <div className="flex justify-between items-center text-[13px]">
                <span className="text-[#707A8A]">محفظة المصدر</span>
                <div className="flex items-center gap-1.5">
                    <Wallet size={14} className="text-[#707A8A]" />
                    <span>المحفظة الفورية (Spot)</span>
                </div>
            </div>

            {/* Row 4 */}
            <div className="flex justify-between items-start text-[13px]">
                <span className="text-[#707A8A]">معرف العملية (TxID)</span>
                <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1.5 cursor-pointer hover:text-[#FCD535]">
                        <span className="font-mono text-[#FCD535]/90 underline underline-offset-4 decoration-dotted" dir="ltr">{txid}</span>
                        <ExternalLink size={14} className="text-[#707A8A]" />
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Support Link */}
        <button className="w-full bg-[#1E2329] p-4 rounded-xl flex items-center justify-between hover:bg-[#2B3139] border border-[#2B3139]/30 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#2B3139] rounded-lg flex items-center justify-center text-[#FCD535]">
                <Info size={20} />
            </div>
            <div className="text-right">
                <p className="text-[14px] font-bold">لماذا عملية السحب "قيد المراجعة"؟</p>
                <p className="text-[12px] text-[#707A8A]">انقر للحصول على مزيد من المساعدة</p>
            </div>
          </div>
          <ArrowLeft size={18} className="text-[#707A8A]" />
        </button>

        {/* Security Badge */}
        <div className="flex flex-col items-center py-6 gap-2">
            <div className="w-8 h-[1px] bg-[#2B3139]" />
            <p className="text-[11px] text-[#707A8A] font-medium tracking-[0.2em] font-sans">SAFE & SECURE BY BINANCE</p>
        </div>
      </main>

      {/* Footer Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0B0E11] p-4 border-t border-[#2B3139] z-50 max-w-2xl mx-auto shadow-[0_-10px_20px_rgba(0,0,0,0.4)]">
        <button 
          className="w-full h-12 bg-[#FCD535] text-black font-bold rounded-lg hover:bg-[#F0C520] transition-transform active:scale-[0.98] text-[15px]"
          id="confirm_button"
        >
          الرجوع للرئيسية
        </button>
      </div>
    </div>
  );
}

