
import { useState } from "react";
import { Check, Brain, Target, Zap, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on component mount
  useState(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">MaxMath</div>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              Επικοινωνία
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Μάθε Μαθηματικά με τον{" "}
            <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Έξυπνο Τρόπο
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Η πρώτη AI πλατφόρμα εξάσκησης για τις Πανελλήνιες. Χωρίς θεωρία – μόνο στοχευμένη πράξη με άμεσο feedback.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg mb-8 transform hover:scale-105 transition-all duration-200">
            Μπες στη Λίστα Αναμονής
          </Button>
          
          {/* ConvertKit Script */}
          <div className="mt-8">
            <script async data-uid="9063eb98de" src="https://maxmath.kit.com/9063eb98de/index.js"></script>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Πώς Λειτουργεί</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Διαγνωστικό Test</h3>
                <p className="text-gray-600">Μάθε σε 10 λεπτά τι ξέρεις</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Εξατομικευμένη Διαδρομή</h3>
                <p className="text-gray-600">AI σου δείχνει μόνο τι χρειάζεσαι</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Πράξη με XP & Επεξήγηση</h3>
                <p className="text-gray-600">Μαθαίνεις με feedback & σύστημα πόντων</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why MaxMath Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Γιατί MaxMath</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Check className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">🔁 Spaced Repetition</h3>
                <p className="text-gray-600">Επαναλαμβάνεις ό,τι χρειάζεσαι τη σωστή στιγμή</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Check className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">🧠 Adaptive Difficulty</h3>
                <p className="text-gray-600">Η δυσκολία προσαρμόζεται στο επίπεδό σου</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Check className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">🧪 Χωρίς θεωρία, μόνο έξυπνη πράξη</h3>
                <p className="text-gray-600">Μαθαίνεις κάνοντας, όχι διαβάζοντας</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Check className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">🎮 XP System</h3>
                <p className="text-gray-600">Κερδίζεις πόντους και βλέπεις την πρόοδό σου</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Check className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">📈 Αποτέλεσμα: Πραγματική βελτίωση</h3>
                <p className="text-gray-600">Μετρήσιμη πρόοδος στις επιδόσεις σου</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Τι Λένε οι Μαθητές</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-lg italic">
                  "Μέσα σε 15 λεπτά κατάλαβα Πιθανότητες που δεν καταλάβαινα όλο το χρόνο."
                </p>
                <p className="font-semibold text-gray-900">Μαρία Κ., Γ' Λυκείου</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-lg italic">
                  "Είναι σαν να έχεις προσωπικό καθηγητή που σου λέει τι να λύσεις."
                </p>
                <p className="font-semibold text-gray-900">Νίκος Π., Γ' Λυκείου</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Τι θα κερδίσεις</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full p-2 mt-1">
                  <Check size={16} />
                </div>
                <p className="text-lg text-gray-700">Πιάνεις υψηλές βαθμολογίες χωρίς να "λιώνεις"</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full p-2 mt-1">
                  <Check size={16} />
                </div>
                <p className="text-lg text-gray-700">Ξέρεις τι να λύσεις κάθε μέρα</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full p-2 mt-1">
                  <Check size={16} />
                </div>
                <p className="text-lg text-gray-700">Διαβάζεις με στόχο και αυτοπεποίθηση</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Συχνές Ερωτήσεις</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg">Είναι δωρεάν;</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Ναι, για όσους μπουν πρώτοι στη λίστα αναμονής θα έχουν δωρεάν πρόσβαση στην πλατφόρμα.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg">Πώς δουλεύει;</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Ξεκινάς με ένα διαγνωστικό test που δείχνει το επίπεδό σου. Μετά, το AI δημιουργεί εξατομικευμένη διαδρομή μάθησης μόνο με ασκήσεις που χρειάζεσαι.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg">Έχει θεωρία;</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Όχι, το MaxMath δεν έχει καθόλου θεωρία. Μαθαίνεις μόνο μέσω εξάσκησης με άμεσο feedback και επεξηγήσεις.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg">Για ποιες τάξεις είναι;</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Προς το παρόν είναι σχεδιασμένο για μαθητές Γ' Λυκείου. Στο μέλλον θα επεκταθεί και σε άλλες τάξεις.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Founder Bio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Η Ιστορία του MaxMath</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              MaxMath δημιουργήθηκε από φοιτητή Μαθηματικού τμήματος, που ήθελε να φτιάξει το εργαλείο που θα ήθελε να είχε όταν διάβαζε για τις Πανελλήνιες.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Θες να πας για 19+ στα Μαθηματικά; Ξεκίνα από εδώ.
          </h2>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200">
            Στείλε μου ασκήσεις – είμαι μέσα!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white text-lg font-bold mb-4">MaxMath</div>
          <p className="text-gray-400">Μαθηματικά Πανελληνίων με AI</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
