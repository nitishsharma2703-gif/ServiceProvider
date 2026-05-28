import { useState } from 'react';

// ── Shared Types ──────────────────────────────────────────────────────────────
interface BtnProps {
  onClick: () => void;
  children: React.ReactNode;
}
interface EyeToggleProps {
  show: boolean;
  onToggle: () => void;
}
interface InfoNoteProps {
  text: string;
}

// ── Sub-components (declared OUTSIDE AuthPage) ────────────────────────────────
const inputCls =
  'w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:bg-white text-sm transition-colors bg-slate-50';

const Logo = () => (
  <div className="flex flex-col items-center gap-2 mb-5 select-none">
    <div className="w-13 h-13 bg-purple-600 rounded-2xl flex items-center justify-center p-3 shadow-md shadow-purple-100">
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 14l3 3 4-4" />
      </svg>
    </div>
    <div className="text-center">
      <span className="block text-lg font-black text-slate-800 tracking-tight">VIZOVY INNOVATIONS</span>
      <span className="block text-xs text-purple-600 tracking-widest font-semibold uppercase mt-0.5">Home Services</span>
    </div>
  </div>
);

const SocialBtn = ({ onClick, children }: BtnProps) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700 bg-white"
  >
    {children}
  </button>
);

const PrimaryBtn = ({ onClick, children }: BtnProps) => (
  <button
    onClick={onClick}
    className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-colors text-sm mt-3"
  >
    {children}
  </button>
);

const BackBtn = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="self-start flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors mb-5"
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
    Back
  </button>
);

const EyeToggle = ({ show, onToggle }: EyeToggleProps) => (
  <button
    type="button"
    onClick={onToggle}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
  >
    {show ? (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    ) : (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )}
  </button>
);

const InfoNote = ({ text }: InfoNoteProps) => (
  <p className="text-xs text-slate-400 mt-2 w-full text-left leading-relaxed">
    <svg className="w-3 h-3 inline mr-1 mb-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
    {text}
  </p>
);

// ── Main Component ────────────────────────────────────────────────────────────
const AuthPage = () => {
  const [screen, setScreen] = useState('main');
  const [tab, setTab] = useState('email');

  const [emailInput, setEmailInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [showPass, setShowPass] = useState(false);

  const [phoneInput, setPhoneInput] = useState('');

  const [gEmail, setGEmail] = useState('');
  const [gPass, setGPass] = useState('');
  const [showGPass, setShowGPass] = useState(false);

  const [fbEmail, setFbEmail] = useState('');
  const [fbPass, setFbPass] = useState('');
  const [showFbPass, setShowFbPass] = useState(false);

  const [msEmail, setMsEmail] = useState('');
  const [msPass, setMsPass] = useState('');
  const [showMsPass, setShowMsPass] = useState(false);

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [otpSub, setOtpSub] = useState('Enter the 6-digit code sent to your number');
  const [successMsg, setSuccessMsg] = useState('Welcome back to Vizovy Innovations');

  const show = (s: string) => setScreen(s);

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    if (value && index < 5) document.getElementById(`o${index + 1}`)?.focus();
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0)
      document.getElementById(`o${index - 1}`)?.focus();
  };

  const doEmailLogin = () => {
    if (!emailInput.trim() || !passInput) return;
    setSuccessMsg(`Welcome back, ${emailInput}`);
    show('success');
  };

  const doGoogleLogin = () => {
    if (!gEmail.trim() || !gEmail.includes('@') || !gPass) return;
    setSuccessMsg(`Signed in via Google: ${gEmail}`);
    show('success');
  };

  const doFBLogin = () => {
    if (!fbEmail.trim() || !fbPass) return;
    setSuccessMsg(`Signed in via Facebook: ${fbEmail}`);
    show('success');
  };

  const doMSLogin = () => {
    if (!msEmail.trim() || !msPass) return;
    setSuccessMsg(`Signed in via Microsoft: ${msEmail}`);
    show('success');
  };

  const doPhoneOTP = () => {
    if (!phoneInput.trim() || phoneInput.length < 8) return;
    setOtpSub(`Enter the 6-digit code sent to +91 ${phoneInput}`);
    setOtp(['', '', '', '', '', '']);
    show('otp');
    setTimeout(() => document.getElementById('o0')?.focus(), 200);
  };

  const verifyOTP = () => {
    if (otp.join('').length < 6) return;
    setSuccessMsg('Phone verified! Welcome to Vizovy.');
    show('success');
  };

  const resendOTP = () => {
    setOtp(['', '', '', '', '', '']);
    document.getElementById('o0')?.focus();
    alert('OTP resent! (demo mode)');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 antialiased font-sans">
      <div className="w-full max-w-105 bg-white rounded-3xl shadow-xl border border-slate-100 p-8 flex flex-col items-center">

        {/* ── MAIN ── */}
        {screen === 'main' && (
          <>
            <Logo />
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Welcome Back</h1>
            <p className="text-sm text-slate-500 mt-1 mb-4 text-center">Sign in to manage your appointments</p>
            <p className="text-xs text-slate-400 text-center max-w-xs leading-relaxed mb-5">
              By continuing, I agree to the{' '}
              <a href="#privacy" className="text-purple-600 font-semibold hover:underline">Privacy Statement</a>
              {' '}and{' '}
              <a href="#terms" className="text-purple-600 font-semibold hover:underline">Terms of Service</a>
            </p>

            <div className="w-full space-y-2.5">
              <SocialBtn onClick={() => show('google')}>
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.11C18.416 1.414 15.607 0 12.24 0 5.58 0 0 5.37 0 12s5.58 12 12.24 12c6.96 0 11.57-4.854 11.57-11.77 0-.79-.085-1.39-.195-1.945H12.24z" />
                </svg>
                Continue with Google
              </SocialBtn>

              <SocialBtn onClick={() => show('facebook')}>
                <svg className="w-5 h-5 shrink-0" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Continue with Facebook
              </SocialBtn>

              <SocialBtn onClick={() => show('microsoft')}>
                <div className="grid grid-cols-2 gap-0.5 w-4 h-4 shrink-0">
                  <div className="bg-[#F25022] w-1.5 h-1.5" />
                  <div className="bg-[#7FBA00] w-1.5 h-1.5" />
                  <div className="bg-[#00A4EF] w-1.5 h-1.5" />
                  <div className="bg-[#FFB900] w-1.5 h-1.5" />
                </div>
                Continue with Microsoft
              </SocialBtn>
            </div>

            <div className="w-full flex items-center gap-3 my-4">
              <div className="flex-1 border-t border-slate-200" />
              <span className="text-xs font-bold text-slate-400 tracking-wider">OR</span>
              <div className="flex-1 border-t border-slate-200" />
            </div>

            {/* Tabs */}
            <div className="flex w-full border border-slate-200 rounded-xl overflow-hidden mb-4">
              {(['email', 'phone'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 py-2.5 text-xs font-medium transition-colors ${
                    tab === t ? 'bg-purple-600 text-white' : 'bg-white text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  {t === 'email' ? 'Email / Username' : 'Phone Number'}
                </button>
              ))}
            </div>

            {tab === 'email' && (
              <div className="w-full space-y-2.5">
                <input
                  type="text"
                  placeholder="Email or username"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className={inputCls}
                />
                <div className="relative">
                  <input
                    type={showPass ? 'text' : 'password'}
                    placeholder="Password"
                    value={passInput}
                    onChange={(e) => setPassInput(e.target.value)}
                    className={`${inputCls} pr-10`}
                  />
                  <EyeToggle show={showPass} onToggle={() => setShowPass((p) => !p)} />
                </div>
                <div className="text-right">
                  <a href="#forgot" className="text-xs text-purple-600 hover:underline font-medium">
                    Forgot password?
                  </a>
                </div>
                <PrimaryBtn onClick={doEmailLogin}>Sign In</PrimaryBtn>
              </div>
            )}

            {tab === 'phone' && (
              <div className="w-full space-y-2.5">
                <div className="flex gap-2">
                  <input type="text" defaultValue="+91" className={`${inputCls} w-16! shrink-0`} />
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    className={`${inputCls} flex-1`}
                  />
                </div>
                <PrimaryBtn onClick={doPhoneOTP}>Send OTP</PrimaryBtn>
              </div>
            )}
          </>
        )}

        {/* ── GOOGLE ── */}
        {screen === 'google' && (
          <div className="w-full flex flex-col items-center">
            <BackBtn onClick={() => show('main')} />
            <svg className="w-9 h-9 mb-3" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.11C18.416 1.414 15.607 0 12.24 0 5.58 0 0 5.37 0 12s5.58 12 12.24 12c6.96 0 11.57-4.854 11.57-11.77 0-.79-.085-1.39-.195-1.945H12.24z" />
            </svg>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Sign in with Google</h1>
            <p className="text-sm text-slate-500 mt-1 mb-5 text-center">Enter your Google account credentials</p>
            <div className="w-full space-y-2.5">
              <input type="email" placeholder="your@gmail.com" value={gEmail} onChange={(e) => setGEmail(e.target.value)} className={inputCls} />
              <div className="relative">
                <input type={showGPass ? 'text' : 'password'} placeholder="Google account password" value={gPass} onChange={(e) => setGPass(e.target.value)} className={`${inputCls} pr-10`} />
                <EyeToggle show={showGPass} onToggle={() => setShowGPass((p) => !p)} />
              </div>
              <InfoNote text="In production, this redirects to Google's OAuth 2.0 consent page." />
              <PrimaryBtn onClick={doGoogleLogin}>Continue with Google</PrimaryBtn>
            </div>
          </div>
        )}

        {/* ── FACEBOOK ── */}
        {screen === 'facebook' && (
          <div className="w-full flex flex-col items-center">
            <BackBtn onClick={() => show('main')} />
            <svg className="w-9 h-9 mb-3" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Sign in with Facebook</h1>
            <p className="text-sm text-slate-500 mt-1 mb-5 text-center">Enter your Facebook credentials</p>
            <div className="w-full space-y-2.5">
              <input type="email" placeholder="Email or phone number" value={fbEmail} onChange={(e) => setFbEmail(e.target.value)} className={inputCls} />
              <div className="relative">
                <input type={showFbPass ? 'text' : 'password'} placeholder="Password" value={fbPass} onChange={(e) => setFbPass(e.target.value)} className={`${inputCls} pr-10`} />
                <EyeToggle show={showFbPass} onToggle={() => setShowFbPass((p) => !p)} />
              </div>
              <InfoNote text="In production, this uses Facebook Login SDK / OAuth 2.0 redirect." />
              <PrimaryBtn onClick={doFBLogin}>Continue with Facebook</PrimaryBtn>
            </div>
          </div>
        )}

        {/* ── MICROSOFT ── */}
        {screen === 'microsoft' && (
          <div className="w-full flex flex-col items-center">
            <BackBtn onClick={() => show('main')} />
            <div className="grid grid-cols-2 gap-1 w-9 h-9 mb-3">
              <div className="bg-[#F25022] rounded-sm" />
              <div className="bg-[#7FBA00] rounded-sm" />
              <div className="bg-[#00A4EF] rounded-sm" />
              <div className="bg-[#FFB900] rounded-sm" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Sign in with Microsoft</h1>
            <p className="text-sm text-slate-500 mt-1 mb-5 text-center">Use your Microsoft or work account</p>
            <div className="w-full space-y-2.5">
              <input type="email" placeholder="Email, phone or Skype" value={msEmail} onChange={(e) => setMsEmail(e.target.value)} className={inputCls} />
              <div className="relative">
                <input type={showMsPass ? 'text' : 'password'} placeholder="Password" value={msPass} onChange={(e) => setMsPass(e.target.value)} className={`${inputCls} pr-10`} />
                <EyeToggle show={showMsPass} onToggle={() => setShowMsPass((p) => !p)} />
              </div>
              <InfoNote text="In production, this uses Microsoft MSAL / Azure AD OAuth 2.0." />
              <PrimaryBtn onClick={doMSLogin}>Sign in</PrimaryBtn>
            </div>
          </div>
        )}

        {/* ── OTP ── */}
        {screen === 'otp' && (
          <div className="w-full flex flex-col items-center">
            <BackBtn onClick={() => show('main')} />
            <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Verify OTP</h1>
            <p className="text-sm text-slate-500 mt-1 mb-5 text-center max-w-xs">{otpSub}</p>
            <div className="flex gap-2 mb-3">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  id={`o${i}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(i, e)}
                  className="w-11 h-12 text-center text-lg font-semibold border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:border-purple-500 focus:bg-white text-slate-800 transition-colors"
                />
              ))}
            </div>
            <p className="text-xs text-slate-500 mb-1">
              Didn't get the code?{' '}
              <button onClick={resendOTP} className="text-purple-600 font-semibold hover:underline bg-transparent border-none cursor-pointer text-xs">
                Resend OTP
              </button>
            </p>
            <PrimaryBtn onClick={verifyOTP}>Verify & Sign In</PrimaryBtn>
          </div>
        )}

        {/* ── SUCCESS ── */}
        {screen === 'success' && (
          <div className="w-full flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">You're signed in!</h1>
            <p className="text-sm text-slate-500 mt-2 mb-6">{successMsg}</p>
            <button
              onClick={() => show('main')}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-colors text-sm"
            >
              Go to Dashboard
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default AuthPage;
