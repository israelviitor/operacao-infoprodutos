import numpy as np, wave
SR=44100
def save(n,x):
    x=np.clip(x/np.max(np.abs(x))*0.9,-1,1); d=(x*32767).astype(np.int16)
    with wave.open(f'/home/user/edicao/remotion/public/sfx/{n}.wav','wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes(d.tobytes())
t=lambda s: np.linspace(0,s,int(SR*s),endpoint=False)
rng=np.random.default_rng(1)
a=t(0.7); save('impact', np.sin(2*np.pi*(90*np.exp(-a*6)+40)*a)*np.exp(-a*5)+0.4*rng.normal(size=a.size)*np.exp(-a*30))
a=t(0.12); save('pop', np.sin(2*np.pi*(400+1800*a/0.12)*a)*np.exp(-a*35))
a=t(1.6); save('boom', (np.sin(2*np.pi*48*a)+0.5*np.sin(2*np.pi*72*a))*np.exp(-a*2.5)*(1-np.exp(-a*200)))
a=t(1.2); save('ding', sum(np.sin(2*np.pi*f*a)*g for f,g in [(1568,1),(3136,.4),(4704,.15)])*np.exp(-a*4))
a=t(0.05); save('tick', np.sin(2*np.pi*2500*a)*np.exp(-a*120))
