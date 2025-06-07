
import { useState, useEffect } from "react";
import { Check, Play, Users, Award, Zap, Target, Star, ArrowRight, Brain, TrendingUp, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Premium Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                MaxMath
              </div>
            </div>
            <Button variant="outline" className="text-slate-700 border-slate-300 hover:bg-slate-50 font-medium">
              Επικοινωνία
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Premium Design */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-teal-500/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Premium Trust Badge */}
            <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200/50 mb-8 px-6 py-2 text-sm font-medium shadow-sm">
              <Shield className="w-4 h-4 mr-2" />
              Εμπιστεύονται ήδη 1,200+ μαθητές
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Μάθε Μαθηματικά με τον<br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                  Γρήγορο Τρόπο
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 rounded-full opacity-30"></div>
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Η μόνη AI πλατφόρμα που σε μαθαίνει <span className="font-semibold text-slate-800">μόνο με εξάσκηση</span>.
              <br />Σχεδιασμένη ειδικά για τις Πανελλήνιες.
            </p>

            {/* Premium Waitlist Form */}
            <div className="max-w-lg mx-auto mb-12">
              <div className="bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-xl border border-slate-200/50">
                <script async data-uid="9063eb98de" src="https://maxmath.kit.com/9063eb98de/index.js"></script>
              </div>
            </div>

            {/* Premium Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span>Δωρεάν Early Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-blue-600" />
                </div>
                <span>Made in Greece 🇬🇷</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-purple-600" />
                </div>
                <span>99% ικανοποίηση</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "1,200+", label: "Μαθητές", icon: Users, color: "from-blue-500 to-blue-600" },
              { number: "75k+", label: "Ασκήσεις", icon: Target, color: "from-green-500 to-green-600" },
              { number: "89%", label: "Βελτίωση", icon: TrendingUp, color: "from-purple-500 to-purple-600" },
              { number: "24/7", label: "AI Support", icon: Clock, color: "from-orange-500 to-orange-600" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-105 transition-transform duration-200`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Premium */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-6 px-4 py-2">
              Πώς λειτουργεί
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Τρία βήματα στην επιτυχία
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Απλό, έξυπνο, αποτελεσματικό. Δες πώς η AI σε οδηγεί στο 20.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Διάγνωση",
                description: "10 λεπτά test. Μαθαίνουμε τι ξέρεις και τι όχι.",
                icon: Target,
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "02",
                title: "Εξάσκηση",
                description: "Η AI σου δίνει μόνο τις ασκήσεις που χρειάζεσαι.",
                icon: Zap,
                color: "from-green-500 to-green-600"
              },
              {
                step: "03",
                title: "Επιτυχία",
                description: "Βλέπεις την πρόοδό σου. Κερδίζεις αυτοπεποίθηση.",
                icon: Award,
                color: "from-purple-500 to-purple-600"
              }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-8xl font-bold text-slate-100 opacity-50 select-none">
                    {item.step}
                  </div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Premium */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <Badge className="bg-purple-100 text-purple-800 border-purple-200 mb-6 px-4 py-2">
                Γιατί MaxMath
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                Φτιαγμένο για μαθητές.<br />
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  Υποστηριζόμενο από AI
                </span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Χωρίς άχρηστη θεωρία",
                    description: "Μαθαίνεις κάνοντας, όχι διαβάζοντας βαρετά κείμενα.",
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    title: "Adaptive AI Engine",
                    description: "Προσαρμόζεται στο επίπεδό σου και την ταχύτητά σου.",
                    color: "from-green-500 to-green-600"
                  },
                  {
                    title: "Spaced Repetition",
                    description: "Επαναλαμβάνεις ό,τι χρειάζεσαι τη σωστή στιγμή.",
                    color: "from-purple-500 to-purple-600"
                  },
                  {
                    title: "Designed για Πανελλήνιες",
                    description: "Κάθε άσκηση στοχεύει στην επιτυχία σου στις εξετάσεις.",
                    color: "from-orange-500 to-orange-600"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className={`w-6 h-6 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2 text-lg">{benefit.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-3xl transform rotate-3"></div>
              <Card className="relative bg-white shadow-2xl border-0 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Play className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Δες το σε δράση</h3>
                  <p className="text-slate-600 mb-6 text-lg">2-λεπτο demo του MaxMath</p>
                  <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white shadow-lg px-8 py-3 text-lg font-semibold">
                    Παίξε Video
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Premium */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-6 px-4 py-2">
              Τι λένε οι μαθητές
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Παίρνεις τον βαθμό.<br />
              <span className="bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
                Ξεπερνάς τον μέσο όρο
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Μέσα σε 15 λεπτά κατάλαβα Πιθανότητες που δεν κατάλαβα όλο το χρόνο.",
                name: "Μαρία Κ.",
                grade: "Γ' Λυκείου",
                avatar: "M",
                color: "from-blue-500 to-blue-600"
              },
              {
                quote: "Ένιωσα για πρώτη φορά ότι προοδεύω στα Μαθηματικά.",
                name: "Νίκος Π.",
                grade: "Γ' Λυκείου",
                avatar: "Ν",
                color: "from-green-500 to-green-600"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 mb-6 text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">{testimonial.name}</div>
                      <div className="text-slate-500">{testimonial.grade}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Premium */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-orange-100 text-orange-800 border-orange-200 mb-6 px-4 py-2">
              Προσφορά Λανσαρίσματος
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Ξεκίνα δωρεάν.<br />
              <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
                Συνέχισε με επιτυχία
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Early Access χωρίς κόστος για τους πρώτους 100 μαθητές.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl transform rotate-1"></div>
              <Card className="relative border-0 shadow-2xl bg-white transform -rotate-1">
                <CardContent className="p-10 text-center">
                  <Badge className="bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 border-blue-200 mb-6 px-4 py-2 text-sm font-bold">
                    🎉 Προσφορά Λανσαρίσματος
                  </Badge>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Early Access</h3>
                  <div className="mb-6">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-2">
                      Δωρεάν
                    </div>
                    <div className="text-lg text-slate-500 line-through">€29/μήνα</div>
                  </div>
                  <p className="text-slate-600 mb-8 text-lg">
                    Πλήρης πρόσβαση στην πλατφόρμα για τους πρώτους 6 μήνες.
                  </p>
                  
                  <div className="space-y-4 mb-8 text-left">
                    {[
                      "Unlimited ασκήσεις",
                      "AI feedback σε real-time",
                      "Progress tracking",
                      "24/7 υποστήριξη"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white shadow-xl py-4 text-lg font-bold">
                    Εγγραφή στη Λίστα Αναμονής
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Premium */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Έτοιμος για το 20 στα Μαθηματικά;
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Μπες στη λίστα αναμονής και ξεκίνα δωρεάν.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-xl font-bold shadow-2xl">
            Ξεκίνα Τώρα
          </Button>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-slate-900 py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-bold text-white">MaxMath</div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Η πρώτη AI πλατφόρμα για Μαθηματικά Πανελληνίων.
              </p>
            </div>
            
            {[
              {
                title: "Πλατφόρμα",
                links: ["Πώς λειτουργεί", "Τιμές", "FAQ"]
              },
              {
                title: "Εταιρεία",
                links: ["Σχετικά", "Blog", "Επικοινωνία"]
              },
              {
                title: "Υποστήριξη",
                links: ["Βοήθεια", "Κοινότητα", "Feedback"]
              }
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-bold text-white mb-4 text-lg">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <p className="text-slate-400 text-center lg:text-left">
                Made in Greece 🇬🇷 with ❤️ by future math nerds.
              </p>
              <p className="text-slate-500 text-sm text-center lg:text-right">
                Σχεδιασμένο από εκπαιδευτικούς & AI engineers στην Ελλάδα.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
