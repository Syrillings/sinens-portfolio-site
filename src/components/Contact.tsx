
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // EmailJS configuration
  const [emailjsConfig, setEmailjsConfig] = useState({
    serviceId: '',
    templateId: '',
    publicKey: ''
  });
  
  // Twilio WhatsApp configuration
  const [twilioConfig, setTwilioConfig] = useState({
    accountSid: '',
    authToken: '',
    whatsappNumber: '',
    personalNumber: ''
  });
  
  // Show/hide configuration form
  const [showConfig, setShowConfig] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleConfigChange = (e: React.ChangeEvent<HTMLInputElement>, configType: 'emailjs' | 'twilio') => {
    const { name, value } = e.target;
    
    if (configType === 'emailjs') {
      setEmailjsConfig(prev => ({
        ...prev,
        [name]: value
      }));
    } else {
      setTwilioConfig(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email via EmailJS
      if (emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey) {
        emailjs.init(emailjsConfig.publicKey);
        
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message
          }
        );
      }

      // Send WhatsApp via direct link (no API needed)
      // This opens WhatsApp with a pre-filled message but doesn't send automatically
      if (twilioConfig.personalNumber) {
        const formattedNumber = twilioConfig.personalNumber.replace(/\D/g, '');
        const whatsappMessage = `New message from ${formData.name} (${formData.email}):\n${formData.message}`;
        const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Open WhatsApp in a new window
        window.open(whatsappUrl, '_blank');
      }

      toast({
        title: "Message sent!",
        description: "Thank you for contacting me. I'll get back to you soon!",
        duration: 5000,
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "sinenernest43@gmail.com",
      href: "mailto:sinenernest43@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+2348148202992",
      href: "tel:+2348148202992"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Uyo, NG",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
          <Separator className="max-w-md mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-start space-x-4 text-foreground hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="p-3 rounded-full bg-muted flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{info.label}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <Separator className="my-8" />
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Syrillings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted text-foreground hover:text-neon-blue hover:bg-muted/70 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/sinen-ernest-6a68a42a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted text-foreground hover:text-neon-blue hover:bg-muted/70 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            
            <Button 
              onClick={() => setShowConfig(!showConfig)} 
              variant="outline" 
              className="mt-6"
              size="sm"
            >
              {showConfig ? "Hide Configuration" : "Configure Email/WhatsApp"}
            </Button>
            
            {showConfig && (
              <div className="mt-4 p-4 border rounded-md space-y-4">
                <h4 className="text-sm font-medium">EmailJS Configuration</h4>
                <div className="space-y-2">
                  <div>
                    <label htmlFor="serviceId" className="text-xs">Service ID</label>
                    <Input 
                      id="serviceId" 
                      name="serviceId" 
                      value={emailjsConfig.serviceId}
                      onChange={(e) => handleConfigChange(e, 'emailjs')}
                      placeholder="EmailJS Service ID"
                    />
                  </div>
                  <div>
                    <label htmlFor="templateId" className="text-xs">Template ID</label>
                    <Input 
                      id="templateId" 
                      name="templateId" 
                      value={emailjsConfig.templateId}
                      onChange={(e) => handleConfigChange(e, 'emailjs')}
                      placeholder="EmailJS Template ID"
                    />
                  </div>
                  <div>
                    <label htmlFor="publicKey" className="text-xs">Public Key</label>
                    <Input 
                      id="publicKey" 
                      name="publicKey" 
                      value={emailjsConfig.publicKey}
                      onChange={(e) => handleConfigChange(e, 'emailjs')}
                      placeholder="EmailJS Public Key"
                    />
                  </div>
                </div>
                
                <h4 className="text-sm font-medium mt-4">WhatsApp Configuration</h4>
                <div>
                  <label htmlFor="personalNumber" className="text-xs">Your WhatsApp Number (with country code)</label>
                  <Input 
                    id="personalNumber" 
                    name="personalNumber" 
                    value={twilioConfig.personalNumber}
                    onChange={(e) => handleConfigChange(e, 'twilio')}
                    placeholder="e.g. 2348148202992"
                  />
                </div>
              </div>
            )}
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this regarding?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto group"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
