import sys, json, subprocess, numpy as np
from faster_whisper import WhisperModel
m = WhisperModel("medium", device="cpu", compute_type="int8")
for path in sys.argv[1:]:
    raw = subprocess.run(["ffmpeg","-v","error","-i",path,"-f","s16le","-ac","1","-ar","16000","-"],capture_output=True).stdout
    audio = np.frombuffer(raw, np.int16).astype(np.float32)/32768.0
    segs, info = m.transcribe(audio, language="pt", word_timestamps=True, beam_size=5, vad_filter=False)
    words = []
    for s in segs:
        for w in s.words:
            words.append({"w": w.word.strip(), "s": round(w.start, 3), "e": round(w.end, 3)})
    name = path.split("/")[-1].rsplit(".", 1)[0]
    json.dump(words, open(f"/home/user/edicao/transcricoes/{name}.json", "w"), ensure_ascii=False, indent=0)
    print(name, len(words), " ".join(x["w"] for x in words), flush=True)
