
import { useState, useEffect } from "react";
import { Check, Play, Users, Award, Zap, Target, Star, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-slate-900">
              MaxMath
            </div>
            <Button variant="outline" className="text-slate-700 border-slate-300 hover:bg-slate-50">
              Επικοινωνία
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Trust Badge */}
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-6 px-4 py-2">
              Εμπιστεύονται ήδη 500+ μαθητές
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Ξέχνα τη θεωρία.<br />
              <span className="text-blue-600">Προπονήσου με ακρίβεια.</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Η πρώτη AI πλατφόρμα που σε μαθαίνει Μαθηματικά μόνο με εξάσκηση. 
              Φτιαγμένη για Πανελλήνιες.
            </p>

            {/* Waitlist Form */}
            <div className="max-w-md mx-auto mb-8">
              <script async data-uid="9063eb98de" src="https://maxmath.kit.com/9063eb98de/index.js"></script>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 text-sm text-slate-500">
              <div className="flex items-center space-x-1">
                <Check className="w-4 h-4 text-green-500" />
                <span>Δωρεάν για Early Access</span>
              </div>
              <div className="flex items-center space-x-1">
                <Check className="w-4 h-4 text-green-500" />
                <span>Φτιαγμένο στην Ελλάδα</span>
              </div>
              <div className="flex items-center space-x-1">
                <Check className="w-4 h-4 text-green-500" />
                <span>99% ικανοποίηση</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">500+</div>
              <div className="text-slate-600">Μαθητές</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">50k+</div>
              <div className="text-slate-600">Ασκήσεις</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">85%</div>
              <div className="text-slate-600">Βελτίωση βαθμού</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">24/7</div>
              <div className="text-slate-600">AI Feedback</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Τρία βήματα στην επιτυχία
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Απλό, έξυπνο, αποτελεσματικό. Δες πώς η AI σε οδηγεί στο 20.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-slate-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Διάγνωση</h3>
                <p className="text-slate-600">
                  10 λεπτά test. Μαθαίνουμε τι ξέρεις και τι όχι.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Εξάσκηση</h3>
                <p className="text-slate-600">
                  Η AI σου δίνει μόνο τις ασκήσεις που χρειάζεσαι.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Επιτυχία</h3>
                <p className="text-slate-600">
                  Βλέπεις την πρόοδό σου. Κερδίζεις αυτοπεποίθηση.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Φτιαγμένο για μαθητές. Υποστηριζόμενο από AI.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Χωρίς άχρηστη θεωρία</h3>
                    <p className="text-slate-600">Μαθαίνεις κάνοντας, όχι διαβάζοντας βαρετά κείμενα.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Adaptive AI</h3>
                    <p className="text-slate-600">Προσαρμόζεται στο επίπεδό σου και την ταχύτητά σου.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Spaced Repetition</h3>
                    <p className="text-slate-600">Επαναλαμβάνεις ό,τι χρειάζεσαι τη σωστή στιγμή.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Designed για Πανελλήνιες</h3>
                    <p className="text-slate-600">Κάθε άσκηση στοχεύει στην επιτυχία σου στις εξετάσεις.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:text-right">
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Δες το σε δράση</h3>
                  <p className="text-slate-600 mb-4">2-λεπτο demo του MaxMath</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Παίξε Video
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Παίρνεις τον βαθμό. Ξεπερνάς τον μέσο όρο.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4">
                  "Μέσα σε 15 λεπτά κατάλαβα Πιθανότητες που δεν κατάλαβα όλο το χρόνο."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">
                    M
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Μαρία Κ.</div>
                    <div className="text-sm text-slate-500">Γ' Λυκείου</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4">
                  "Ένιωσα για πρώτη φορά ότι προοδεύω στα Μαθηματικά."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold mr-3">
                    Ν
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Νίκος Π.</div>
                    <div className="text-sm text-slate-500">Γ' Λυκείου</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Ξεκίνα δωρεάν. Συνέχισε με επιτυχία.
            </h2>
            <p className="text-lg text-slate-600">
              Early Access χωρίς κόστος για τους πρώτους 100 μαθητές.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-blue-200 bg-white">
              <CardContent className="p-8 text-center">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
                  Προσφορά Λανσαρίσματος
                </Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Early Access</h3>
                <div className="text-4xl font-bold text-slate-900 mb-4">
                  Δωρεάν
                  <span className="text-lg text-slate-500 line-through ml-2">€29/μήνα</span>
                </div>
                <p className="text-slate-600 mb-6">
                  Πλήρης πρόσβαση στην πλατφόρμα για τους πρώτους 6 μήνες.
                </p>
                <div className="space-y-3 mb-6 text-left">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-slate-700">Unlimited ασκήσεις</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-slate-700">AI feedback σε real-time</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-slate-700">Progress tracking</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-slate-700">24/7 υποστήριξη</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Εγγραφή στη Λίστα Αναμονής
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Έτοιμος για το 20 στα Μαθηματικά;
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Μπες στη λίστα αναμονής και ξεκίνα δωρεάν.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Ξεκίνα Τώρα
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-white mb-4">MaxMath</div>
              <p className="text-slate-400">
                Η πρώτη AI πλατφόρμα για Μαθηματικά Πανελληνίων.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Πλατφόρμα</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Πώς λειτουργεί</li>
                <li>Τιμές</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Εταιρεία</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Σχετικά</li>
                <li>Blog</li>
                <li>Επικοινωνία</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Υποστήριξη</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Βοήθεια</li>
                <li>Κοινότητα</li>
                <li>Feedback</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400">
              Made in Greece 🇬🇷 with ❤️ by future math nerds.
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Σχεδιασμένο από εκπαιδευτικούς & AI engineers στην Ελλάδα.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
