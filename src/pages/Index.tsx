
import { useState, useEffect } from "react";
import { Check, Play, Users, Award, Zap, Target, Star, ArrowRight, Brain, TrendingUp, Shield, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const FloatingElement = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
    <div 
      className={`animate-[float_6s_ease-in-out_infinite] ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-[drift_20s_ease-in-out_infinite]"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-teal-500/5 to-green-500/5 rounded-full blur-3xl animate-[drift_25s_ease-in-out_infinite_reverse]"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
          }}
        />
      </div>

      {/* Header with smooth slide-in */}
      <header className="bg-white/95 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50 transition-all duration-500">
        <div className="container mx-auto px-6 py-4">
          <div className={`flex items-center justify-between transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Brain className="w-6 h-6 text-white animate-pulse" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                MaxMath
              </div>
            </div>
            <Button variant="outline" className="border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-md">
              Επικοινωνία
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with enhanced animations */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className={`text-center max-w-5xl mx-auto transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Animated Trust Badge */}
            <div className="mb-8 animate-[fadeInUp_1s_ease-out_0.2s_both]">
              <Badge className="bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border-emerald-200 px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <Shield className="w-4 h-4 mr-2 animate-pulse" />
                Εμπιστεύονται 2,847+ μαθητές
              </Badge>
            </div>

            {/* Animated Headline */}
            <div className="animate-[fadeInUp_1s_ease-out_0.4s_both]">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
                Κατακτήστε τα Μαθηματικά<br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 bg-clip-text text-transparent animate-[gradientShift_3s_ease-in-out_infinite]">
                    με Ακρίβεια AI
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 rounded-full animate-[shimmer_2s_ease-in-out_infinite]" />
                </span>
              </h1>
            </div>

            {/* Animated Subtitle */}
            <div className="animate-[fadeInUp_1s_ease-out_0.6s_both]">
              <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Η μοναδική πλατφόρμα που σας προετοιμάζει για τις <span className="font-semibold text-gray-800 relative">
                  Πανελλήνιες
                  <Sparkles className="absolute -top-2 -right-6 w-5 h-5 text-yellow-500 animate-spin" />
                </span>
                <br />με εξατομικευμένη εκπαίδευση και στοχευμένη εξάσκηση.
              </p>
            </div>

            {/* Animated Waitlist Form */}
            <div className="animate-[fadeInUp_1s_ease-out_0.8s_both] mb-12">
              <div className="max-w-lg mx-auto relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
                <div className="relative bg-white p-2 rounded-2xl shadow-2xl border border-gray-100">
                  <script async data-uid="9063eb98de" src="https://maxmath.kit.com/9063eb98de/index.js"></script>
                </div>
              </div>
            </div>

            {/* Animated Trust Elements */}
            <div className="animate-[fadeInUp_1s_ease-out_1s_both]">
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
                {[
                  { icon: Check, text: "Δωρεάν Πρόσβαση", color: "text-emerald-600" },
                  { icon: Shield, text: "100% Ασφαλές", color: "text-blue-600" },
                  { icon: Star, text: "98% Επιτυχία", color: "text-yellow-600" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 group hover:scale-110 transition-transform duration-300">
                    <div className={`w-5 h-5 ${item.color} bg-opacity-10 rounded-full flex items-center justify-center`}>
                      <item.icon className={`w-3 h-3 ${item.color} group-hover:animate-pulse`} />
                    </div>
                    <span className="group-hover:text-gray-800 transition-colors duration-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <FloatingElement delay={0} className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl" />
        <FloatingElement delay={2} className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-xl" />
        <FloatingElement delay={4} className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl" />
      </section>

      {/* Stats Section with staggered animations */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "2,847", label: "Μαθητές", icon: Users, color: "from-blue-500 to-blue-600", delay: 0 },
              { number: "127k", label: "Ασκήσεις", icon: Target, color: "from-emerald-500 to-emerald-600", delay: 0.1 },
              { number: "94%", label: "Βελτίωση", icon: TrendingUp, color: "from-purple-500 to-purple-600", delay: 0.2 },
              { number: "24/7", label: "Υποστήριξη", icon: Clock, color: "from-orange-500 to-orange-600", delay: 0.3 }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-[fadeInUp_1s_ease-out_both] hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${stat.delay}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:rotate-3 transition-all duration-300 relative overflow-hidden`}>
                  <stat.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works with morphing cards */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:both]" style={{ animationDelay: '0.2s' }}>
            <Badge className="bg-blue-50 text-blue-700 border-blue-200 mb-6 px-4 py-2 hover:bg-blue-100 transition-colors duration-300">
              Πώς Λειτουργεί
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Τρία Βήματα στην <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Κορυφή</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Ανάλυση Επιπέδου",
                description: "Έξυπνο τεστ 5 λεπτών που εντοπίζει τα κενά σας",
                icon: Target,
                color: "from-blue-500 to-blue-600",
                delay: 0.3
              },
              {
                step: "02", 
                title: "Στοχευμένη Εξάσκηση",
                description: "AI προσαρμόζει τις ασκήσεις στις ανάγκες σας",
                icon: Zap,
                color: "from-emerald-500 to-emerald-600",
                delay: 0.5
              },
              {
                step: "03",
                title: "Εξαιρετικά Αποτελέσματα",
                description: "Παρακολουθείτε την πρόοδο και κατακτάτε το 20",
                icon: Award,
                color: "from-purple-500 to-purple-600",
                delay: 0.7
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 animate-[fadeInUp_1s_ease-out_both] relative overflow-hidden"
                style={{ animationDelay: `${item.delay}s` }}
              >
                <CardContent className="p-8 text-center relative">
                  {/* Animated background number */}
                  <div className="absolute top-0 right-0 text-8xl font-bold text-gray-50 opacity-50 select-none group-hover:scale-110 transition-transform duration-500">
                    {item.step}
                  </div>
                  
                  {/* Glowing icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                      <item.icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl mx-auto opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/0 to-purple-50/0 group-hover:from-blue-50/20 group-hover:via-purple-50/10 group-hover:to-transparent transition-all duration-500 rounded-lg" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits with interactive hover effects */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="animate-[fadeInLeft_1s_ease-out_0.2s_both]">
              <Badge className="bg-purple-50 text-purple-700 border-purple-200 mb-6 px-4 py-2">
                Γιατί MaxMath
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Δημιουργήθηκε για Μαθητές.<br />
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  Τροφοδοτείται από AI
                </span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Χωρίς Άχρηστη Θεωρία",
                    description: "Μαθαίνετε πράττοντας, όχι απομνημονεύοντας",
                    color: "from-blue-500 to-blue-600",
                    delay: 0.3
                  },
                  {
                    title: "Προσαρμοστική AI",
                    description: "Αλγόριθμος που προσαρμόζεται στο ρυθμό σας",
                    color: "from-emerald-500 to-emerald-600",
                    delay: 0.4
                  },
                  {
                    title: "Επιστημονική Επανάληψη",
                    description: "Επαναλαμβάνετε στη σωστή στιγμή για μέγιστη απόδοση",
                    color: "from-purple-500 to-purple-600",
                    delay: 0.5
                  },
                  {
                    title: "Σχεδιασμένο για Πανελλήνιες",
                    description: "Κάθε άσκηση στοχεύει στην επιτυχία σας",
                    color: "from-orange-500 to-orange-600",
                    delay: 0.6
                  }
                ].map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 group hover:scale-105 transition-all duration-300 animate-[fadeInUp_1s_ease-out_both] p-4 rounded-lg hover:bg-white hover:shadow-lg"
                    style={{ animationDelay: `${benefit.delay}s` }}
                  >
                    <div className={`w-6 h-6 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 relative overflow-hidden`}>
                      <Check className="w-4 h-4 text-white" />
                      <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-blue-600 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-[fadeInRight_1s_ease-out_0.4s_both]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-3xl transform rotate-3 animate-[float_6s_ease-in-out_infinite]" />
              <Card className="relative bg-white shadow-2xl border-0 transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-500 group overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-teal-50/0 group-hover:from-blue-50/50 group-hover:via-purple-50/30 group-hover:to-teal-50/50 transition-all duration-700" />
                  
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
                      <Play className="w-10 h-10 text-white group-hover:scale-125 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      Δείτε σε Δράση
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">Demo 2 λεπτών της πλατφόρμας</p>
                    <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white shadow-lg px-8 py-3 text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn">
                      <span className="relative z-10">Παρακολουθήστε Video</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with sliding animations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-[fadeInUp_1s_ease-out_0.2s_both]">
            <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 mb-6 px-4 py-2">
              Μαρτυρίες Επιτυχίας
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Αποτελέσματα που <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Εντυπωσιάζουν</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Σε 2 εβδομάδες κατάλαβα περισσότερα από όλο το εξάμηνο. Το AI με οδήγησε ακριβώς εκεί που χρειαζόμουν βοήθεια.",
                name: "Μαρία Κ.",
                grade: "Γ' Λυκείου",
                avatar: "Μ",
                color: "from-blue-500 to-blue-600",
                delay: 0.3
              },
              {
                quote: "Πρώτη φορά που αισθάνομαι σίγουρη για τα Μαθηματικά. Η πλατφόρμα με έκανε να αγαπήσω το μάθημα!",
                name: "Νίκος Π.", 
                grade: "Γ' Λυκείου",
                avatar: "Ν",
                color: "from-emerald-500 to-emerald-600",
                delay: 0.5
              }
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 animate-[fadeInUp_1s_ease-out_both] relative overflow-hidden"
                style={{ animationDelay: `${testimonial.delay}s` }}
              >
                <CardContent className="p-8 relative">
                  {/* Animated quote background */}
                  <div className="absolute top-4 left-4 text-6xl text-gray-100 font-serif opacity-50 group-hover:opacity-70 transition-opacity duration-300">"</div>
                  
                  <div className="relative">
                    <div className="flex items-center mb-6 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" 
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed italic group-hover:text-gray-800 transition-colors duration-300">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                        <span className="relative z-10">{testimonial.avatar}</span>
                        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-300">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-500">{testimonial.grade}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/0 to-emerald-50/0 group-hover:from-blue-50/20 group-hover:via-emerald-50/10 group-hover:to-transparent transition-all duration-500 rounded-lg" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing with pulsing effects */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-[fadeInUp_1s_ease-out_0.2s_both]">
            <Badge className="bg-orange-50 text-orange-700 border-orange-200 mb-6 px-4 py-2 animate-pulse">
              🚀 Προσφορά Εκκίνησης
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ξεκινήστε <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">Δωρεάν</span>
            </h2>
          </div>

          <div className="max-w-lg mx-auto animate-[fadeInUp_1s_ease-out_0.4s_both]">
            <div className="relative group">
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-3xl transform rotate-1 animate-[gradientShift_3s_ease-in-out_infinite]" />
              <Card className="relative border-0 shadow-2xl bg-white transform -rotate-1 group-hover:rotate-0 transition-all duration-500">
                <CardContent className="p-10 text-center relative">
                  {/* Animated success badge */}
                  <Badge className="bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border-emerald-200 mb-6 px-4 py-2 font-bold hover:scale-105 transition-transform duration-300">
                    ✨ Πρώτοι 100 Μαθητές
                  </Badge>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    Πρόσβαση VIP
                  </h3>
                  
                  <div className="mb-6">
                    <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-2 animate-pulse">
                      Δωρεάν
                    </div>
                    <div className="text-lg text-gray-500 line-through">€39/μήνα</div>
                  </div>
                  
                  <div className="space-y-4 mb-8 text-left">
                    {[
                      "Απεριόριστες ασκήσεις & τεστ",
                      "AI coach 24/7",
                      "Προσωποποιημένο πρόγραμμα",
                      "Αναλυτικά στατιστικά προόδου"
                    ].map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-center group/item hover:scale-105 transition-transform duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-emerald-200 transition-colors duration-300">
                          <Check className="w-3 h-3 text-emerald-600 group-hover/item:scale-125 transition-transform duration-300" />
                        </div>
                        <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl py-4 text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn">
                    <span className="relative z-10 flex items-center justify-center">
                      Εγγραφή στη Λίστα Αναμονής
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with epic animations */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-[drift_20s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 animate-[shimmer_4s_ease-in-out_infinite]" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative">
          <div className="animate-[fadeInUp_1s_ease-out_0.2s_both]">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Έτοιμοι για το <span className="relative">
                20
                <Sparkles className="absolute -top-2 -right-6 w-8 h-8 text-yellow-300 animate-spin" />
              </span>?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Εγγραφείτε τώρα και αποκτήστε άμεση πρόσβαση στην πλατφόρμα.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-white/20 hover:scale-110 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Ξεκινήστε Τώρα</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-100/50 to-blue-50/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer with subtle animations */}
      <footer className="bg-gray-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div className="animate-[fadeInUp_1s_ease-out_0.2s_both]">
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-bold text-white">MaxMath</div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Η πρώτη AI πλατφόρμα για Μαθηματικά Πανελληνίων.
                <br />Δημιουργήθηκε στην Ελλάδα με αγάπη.
              </p>
            </div>
            
            {[
              {
                title: "Πλατφόρμα",
                links: ["Πώς λειτουργεί", "Τιμές", "FAQ", "Blog"],
                delay: 0.3
              },
              {
                title: "Εταιρεία", 
                links: ["Σχετικά με εμάς", "Καριέρες", "Επικοινωνία", "Νέα"],
                delay: 0.4
              },
              {
                title: "Υποστήριξη",
                links: ["Κέντρο βοήθειας", "Κοινότητα", "Αναφορά σφάλματος", "Feedback"],
                delay: 0.5
              }
            ].map((section, index) => (
              <div 
                key={index} 
                className="animate-[fadeInUp_1s_ease-out_both]"
                style={{ animationDelay: `${section.delay}s` }}
              >
                <h4 className="font-bold text-white mb-4 text-lg">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-8 animate-[fadeInUp_1s_ease-out_0.6s_both]">
            <div className="text-center">
              <p className="text-gray-400 mb-2">
                🇬🇷 Φτιαγμένο στην Ελλάδα με ❤️ από εκπαιδευτικούς & AI engineers
              </p>
              <p className="text-gray-500 text-sm">
                © 2024 MaxMath. Όλα τα δικαιώματα προστατεύονται.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes drift {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(100px) translateY(-50px); }
          50% { transform: translateX(200px) translateY(0px); }
          75% { transform: translateX(100px) translateY(50px); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
