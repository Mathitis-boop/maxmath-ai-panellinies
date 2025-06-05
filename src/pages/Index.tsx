
import { useState, useEffect } from "react";
import { Check, Brain, Target, Zap, Users, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedWord, setAnimatedWord] = useState("Έξυπνο");

  // Trigger animation on component mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Animate rotating words in hero
  useEffect(() => {
    const words = ["Έξυπνο", "Σωστό", "Γρήγορο", "Εξατομικευμένο"];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setAnimatedWord(words[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#0A1A3A] to-blue-600 bg-clip-text text-transparent">
              MaxMath
            </div>
            <Button variant="outline" className="text-[#0A1A3A] border-[#0A1A3A] hover:bg-[#E3F2FD] font-medium">
              Επικοινωνία
            </Button>
          </div>
        </div>
      </header>

      {/* Mission Statement Banner */}
      <section className="bg-gradient-to-r from-[#0A1A3A] to-blue-800 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <p className="text-2xl md:text-4xl font-bold text-white text-center leading-relaxed max-w-6xl mx-auto">
              Η σύγχρονη εκπαίδευση απέτυχε να διδάξει αποτελεσματικά.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-blue-100 text-center leading-relaxed max-w-5xl mx-auto mt-4">
              Εμείς αναλάβαμε να δημιουργήσουμε ένα προϊόν που σε μαθαίνει Μαθηματικά σωστά.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-6xl text-[#0A1A3A] animate-pulse">∫</div>
          <div className="absolute top-40 right-20 text-4xl text-blue-600 animate-bounce">π</div>
          <div className="absolute bottom-40 left-20 text-5xl text-[#0A1A3A] animate-pulse">∑</div>
          <div className="absolute bottom-20 right-10 text-6xl text-blue-600 animate-bounce">∞</div>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} relative z-10`}>
          <h1 className="text-5xl md:text-7xl font-bold text-[#0A1A3A] mb-8 leading-tight">
            Μάθε Μαθηματικά με τον{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent transition-all duration-500">
                {animatedWord}
              </span>
              <span className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"></span>
            </span>{" "}
            Τρόπο
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
            Η πρώτη AI πλατφόρμα εξάσκησης για τις Πανελλήνιες. Χωρίς θεωρία – μόνο στοχευμένη πράξη με άμεσο feedback.
          </p>
          <div className="space-y-6">
            <Button size="lg" className="bg-gradient-to-r from-[#0A1A3A] to-blue-700 hover:from-blue-800 hover:to-blue-900 text-white px-10 py-6 text-xl font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl">
              Μπες στη Λίστα Αναμονής
            </Button>
            
            {/* FOMO Element */}
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-700 font-medium">Μόνο 47 θέσεις Early Access απομένουν</span>
            </div>
          </div>
          
          {/* ConvertKit Script */}
          <div className="mt-12">
            <script async data-uid="9063eb98de" src="https://maxmath.kit.com/9063eb98de/index.js"></script>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0A1A3A] mb-16">Πώς Λειτουργεί</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Διαγνωστικό Test", desc: "Μάθε σε 10 λεπτά τι ξέρεις", number: "01" },
              { icon: Brain, title: "Εξατομικευμένη Διαδρομή", desc: "AI σου δείχνει μόνο τι χρειάζεσαι", number: "02" },
              { icon: Zap, title: "Πράξη με XP & Επεξήγηση", desc: "Μαθαίνεις με feedback & σύστημα πόντων", number: "03" }
            ].map((step, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl overflow-hidden group">
                <CardContent className="p-8 text-center relative">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-blue-100 group-hover:text-blue-200 transition-colors">
                    {step.number}
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="text-white" size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A1A3A] mb-4">{step.title}</h3>
                  <p className="text-slate-600 text-lg">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why MaxMath Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0A1A3A] mb-16">Γιατί MaxMath</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { emoji: "🔁", title: "Spaced Repetition", desc: "Επαναλαμβάνεις ό,τι χρειάζεσαι τη σωστή στιγμή" },
              { emoji: "🧠", title: "Adaptive AI", desc: "Η δυσκολία προσαρμόζεται στο επίπεδό σου" },
              { emoji: "🚫", title: "Χωρίς άχρηστη θεωρία", desc: "Μαθαίνεις κάνοντας, όχι διαβάζοντας" },
              { emoji: "🎮", title: "XP System", desc: "Κερδίζεις πόντους και βλέπεις την πρόοδό σου" },
              { emoji: "✅", title: "Designed για Πανελλήνιες", desc: "Στοχευμένα για επιτυχία στις εξετάσεις" },
              { emoji: "📈", title: "Μετρήσιμη πρόοδος", desc: "Βλέπεις την πραγματική σου βελτίωση" }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.emoji}
                  </div>
                  <h3 className="font-bold text-[#0A1A3A] text-xl mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-[#0A1A3A] to-blue-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">Τι Λένε οι Μαθητές</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Μαρία Κ., Γ' Λυκείου", text: "Μέσα σε 15 λεπτά κατάλαβα Πιθανότητες που δεν καταλάβαινα όλο το χρόνο.", avatar: "M" },
              { name: "Νίκος Π., Γ' Λυκείου", text: "Ένιωσα για πρώτη φορά ότι προοδεύω στα Μαθηματικά.", avatar: "Ν" }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-white mb-6 text-lg italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.avatar}
                    </div>
                    <p className="font-semibold text-blue-100">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0A1A3A] mb-16">Τι θα κερδίσεις</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                "Πιάνεις υψηλές βαθμολογίες χωρίς να \"λιώνεις\"",
                "Ξέρεις τι να λύσεις κάθε μέρα",
                "Διαβάζεις με στόχο και αυτοπεποίθηση"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full p-3 flex-shrink-0">
                    <Check size={20} />
                  </div>
                  <p className="text-lg text-slate-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0A1A3A] mb-16">Συχνές Ερωτήσεις</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "Είναι δωρεάν;", a: "Ναι, για όσους μπουν πρώτοι στη λίστα αναμονής θα έχουν δωρεάν πρόσβαση στην πλατφόρμα." },
                { q: "Τι κάνει διαφορετικό το MaxMath;", a: "Το MaxMath χρησιμοποιεί AI για να δημιουργήσει εξατομικευμένη διαδρομή μάθησης. Δεν έχει θεωρία - μόνο στοχευμένη εξάσκηση με άμεσο feedback." },
                { q: "Θα καταλαβαίνω τις λύσεις;", a: "Απολύτως! Κάθε άσκηση συνοδεύεται από λεπτομερή επεξήγηση και feedback που σε βοηθάει να κατανοήσεις τη λογική." },
                { q: "Μπορώ να το χρησιμοποιώ κάθε μέρα;", a: "Ναι! Το σύστημα είναι σχεδιασμένο για καθημερινή χρήση με spaced repetition που σε κρατάει στο σωστό ρυθμό." }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`} className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden">
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#0A1A3A] px-6 py-4 hover:bg-slate-50">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 px-6 pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Founder Bio Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1A3A] mb-8">Η Ιστορία του MaxMath</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              MaxMath δημιουργήθηκε από φοιτητή Μαθηματικού τμήματος, που ήθελε να φτιάξει το εργαλείο που θα ήθελε να είχε όταν διάβαζε για τις Πανελλήνιες.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Θες να πας για 19+ στα Μαθηματικά; Ξεκίνα από εδώ.
          </h2>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-xl font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl">
            Στείλε μου ασκήσεις – είμαι μέσα!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1A3A] py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            MaxMath
          </div>
          <p className="text-blue-200 mb-4">Μαθηματικά Πανελληνίων με AI</p>
          <p className="text-blue-300 text-sm">
            Made in Greece 🇬🇷 with ❤️ by future math nerds.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
