import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, DollarSign, Users, TrendingUp, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

/**
 * BelCred Landing Page - Empréstimo Consignado
 * Design: Modernismo Corporativo com Ênfase em Confiança
 * Paleta: Azul profundo (#1e40af) + Amarelo ouro (#f59e0b) + Verde sucesso (#10b981)
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    loanType: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Integrar com API de captura de leads
    alert("Obrigado! Entraremos em contato em breve.");
    setFormData({ name: "", phone: "", email: "", loanType: "", message: "" });
  };

  const loanTypes = [
    {
      id: "clt",
      title: "Empréstimo CLT",
      description: "Para trabalhadores com carteira assinada",
      icon: "👔",
      features: ["Até 96 parcelas", "Taxa competitiva", "Aprovação rápida"],
    },
    {
      id: "pensionista",
      title: "Empréstimo Pensionista",
      description: "Para beneficiários do INSS",
      icon: "🏛️",
      features: ["Desconto em folha", "Sem comprovação de renda", "Taxas reduzidas"],
    },
    {
      id: "concurso",
      title: "Empréstimo Concursado",
      description: "Para servidores públicos concursados",
      icon: "📋",
      features: ["Estabilidade garantida", "Prazos longos", "Taxas especiais"],
    },
    {
      id: "aposentado",
      title: "Empréstimo Aposentado",
      description: "Para aposentados e pensionistas",
      icon: "👴",
      features: ["Sem análise de crédito rigorosa", "Aprovação garantida", "Desconto automático"],
    },
    {
      id: "novo",
      title: "Novo Módulo",
      description: "Em desenvolvimento - em breve!",
      icon: "🚀",
      features: ["Inovação", "Mais benefícios", "Modalidades extras"],
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "João Silva",
      role: "Gerente de Vendas",
      text: "Consegui o empréstimo em apenas 2 dias. Processo muito rápido e seguro!",
      rating: 5,
    },
    {
      id: 2,
      name: "Maria Santos",
      role: "Professora Aposentada",
      text: "Excelente atendimento. A equipe foi muito prestativa e esclareceu todas as minhas dúvidas.",
      rating: 5,
    },
    {
      id: 3,
      name: "Carlos Oliveira",
      role: "Servidor Público",
      text: "Taxas muito competitivas comparado com outras instituições. Recomendo!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src="/images/belcred-logo.png" alt="BelCred" className="h-12 w-auto" />
          </div>
          <Button
            variant="default"
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })}
          >
            Solicitar Agora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/hero-background.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                Empréstimo Consignado Seguro e Rápido
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Taxas competitivas, aprovação rápida e desconto direto em folha. Soluções de crédito pensadas para você.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6"
                  onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Simular Agora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-700 text-blue-700 hover:bg-blue-50 text-lg px-8 py-6"
                >
                  Saiba Mais
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold text-blue-700">50K+</p>
                  <p className="text-sm text-gray-600">Clientes Satisfeitos</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-700">2 dias</p>
                  <p className="text-sm text-gray-600">Aprovação Média</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-700">98%</p>
                  <p className="text-sm text-gray-600">Taxa de Aprovação</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <img
                src="/images/hero-background.png"
                alt="Empréstimo Consignado"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-blue-50 border-y-2 border-yellow-400">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-blue-900">100% Seguro</h3>
                <p className="text-sm text-gray-700">Seus dados são protegidos com criptografia</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-blue-900" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-blue-900">Taxas Competitivas</h3>
                <p className="text-sm text-gray-700">As melhores taxas do mercado</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-blue-900">Atendimento 24/7</h3>
                <p className="text-sm text-gray-700">Sempre disponível para ajudar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Modalidades de Empréstimo</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Escolha a modalidade que melhor se adequa ao seu perfil
            </p>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanTypes.map((loan) => (
              <Card
                key={loan.id}
                className="p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100 hover:border-blue-200"
              >
                <div className="text-5xl mb-4">{loan.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{loan.title}</h3>
                <p className="text-gray-700 mb-6">{loan.description}</p>

                <ul className="space-y-3 mb-8">
                  {loan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white"
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, loanType: loan.title }));
                    document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Saiba Mais
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">O que Nossos Clientes Dizem</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Confira os depoimentos de clientes satisfeitos
            </p>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-8 border-2 border-gray-200">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-blue-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-blue-50 rounded-lg border-2 border-blue-200 text-center">
            <p className="text-gray-700 mb-4">
              Quer adicionar seu depoimento? Após contratar conosco, compartilhe sua experiência!
            </p>
            <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-100">
              Compartilhar Experiência
            </Button>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-section" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">Solicite Seu Empréstimo</h2>
              <p className="text-xl text-gray-700">
                Preencha o formulário abaixo e nossa equipe entrará em contato
              </p>
              <div className="w-16 h-1 bg-yellow-400 mx-auto mt-6" />
            </div>

            <Card className="p-8 md:p-12 border-2 border-gray-200 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">Nome Completo *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    required
                    className="border-2 border-gray-300 focus:border-blue-700 focus:ring-blue-700"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-2">Telefone *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      required
                      className="border-2 border-gray-300 focus:border-blue-700 focus:ring-blue-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-2">E-mail *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                      className="border-2 border-gray-300 focus:border-blue-700 focus:ring-blue-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">Modalidade de Empréstimo *</label>
                  <select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:border-blue-700 focus:ring-blue-700 bg-white text-gray-700"
                  >
                    <option value="">Selecione uma modalidade</option>
                    {loanTypes.map((loan) => (
                      <option key={loan.id} value={loan.title}>
                        {loan.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">Mensagem (Opcional)</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos mais sobre sua situação..."
                    className="border-2 border-gray-300 focus:border-blue-700 focus:ring-blue-700"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6 font-semibold"
                >
                  Enviar Solicitação
                </Button>

                <p className="text-xs text-gray-600 text-center">
                  Ao enviar este formulário, você concorda com nossa política de privacidade.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
            <div className="flex items-center gap-3 mb-4">
            <img src="/images/belcred-logo.png" alt="BelCred" className="h-12 w-auto" />
          </div>
              <p className="text-blue-100">Empréstimo Consignado Seguro e Rápido</p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Modalidades</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    CLT
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pensionista
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Concursado
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Aposentado
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Empresa</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Contato</h4>
              <ul className="space-y-3 text-blue-100 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(11) 3000-0000</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@belcred.com.br</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>São Paulo, SP</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-blue-100 text-sm">
              <p>&copy; 2024 BelCred. Todos os direitos reservados.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-white transition">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
