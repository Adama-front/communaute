'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Book, Calendar, User, Mail, Phone, Download, CheckCircle, AlertCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    memberNumber: '',
    bookTitle: '',
    bookAuthor: '',
    bookISBN: '',
    reservationType: '',
    preferredDate: '',
    comments: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableBooks = [
    {
      id: 1,
      title: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      isbn: '978-2-07-040850-1',
      available: true,
      category: 'Classique'
    },
    {
      id: 2,
      title: 'L\'Étranger',
      author: 'Albert Camus',
      isbn: '978-2-07-036002-1',
      available: true,
      category: 'Littérature'
    },
    {
      id: 3,
      title: 'Une Histoire de tout, ou presque...',
      author: 'Bill Bryson',
      isbn: '978-2-228-89388-7',
      available: true,
      category: 'Sciences'
    },
    {
      id: 4,
      title: 'Le Seigneur des Anneaux',
      author: 'J.R.R. Tolkien',
      isbn: '978-2-267-01696-8',
      available: true,
      category: 'Fantasy'
    }
  ];

  const reservationTypes = [
    { value: 'immediate', label: 'Réservation immédiate' },
    { value: 'future', label: 'Réservation pour une date précise' },
    { value: 'notification', label: 'Notification de disponibilité' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookSelect = (book: any) => {
    setFormData(prev => ({
      ...prev,
      bookTitle: book.title,
      bookAuthor: book.author,
      bookISBN: book.isbn
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation de soumission
    setTimeout(() => {
      toast.success('Réservation confirmée !', {
        description: 'Vous recevrez un email de confirmation sous peu.'
      });
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        memberNumber: '',
        bookTitle: '',
        bookAuthor: '',
        bookISBN: '',
        reservationType: '',
        preferredDate: '',
        comments: ''
      });
    }, 2000);
  };

  const generatePDF = () => {
    // Simulation de génération PDF
    toast.success('PDF généré !', {
      description: 'Le formulaire de réservation a été téléchargé.'
    });
  };

  const isFormValid = formData.firstName && formData.lastName && formData.email && 
                     formData.bookTitle && formData.reservationType;

  return (
    <Layout>
      <div className="py-8">
        <div className="container-custom">
          {/* Page Header */}
          <div className="mb-8">
            <nav className="mb-4">
              <ol className="flex items-center space-x-2 text-sm text-gray-500">
                <li><Link href="/" className="hover:text-primary">Accueil</Link></li>
                <li>/</li>
                <li><Link href="/bibliotheque" className="hover:text-primary">Bibliothèque</Link></li>
                <li>/</li>
                <li className="text-gray-900">Réservation</li>
              </ol>
            </nav>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-1 h-12 bg-indigo-600 rounded"></div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Réserver un livre</h1>
                <p className="text-lg text-gray-600">Réservez vos ouvrages préférés en ligne</p>
              </div>
              <Book className="w-8 h-8 text-indigo-600 ml-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Book className="w-5 h-5 mr-2 text-indigo-600" />
                    Formulaire de réservation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations personnelles</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">Prénom *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Votre prénom"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Nom *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Votre nom"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="votre@email.fr"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Téléphone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="01 23 45 67 89"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="memberNumber">Numéro d'adhérent (si vous en avez un)</Label>
                          <Input
                            id="memberNumber"
                            name="memberNumber"
                            type="text"
                            value={formData.memberNumber}
                            onChange={handleInputChange}
                            placeholder="Ex: BIB2024001"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Book Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations sur le livre</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="bookTitle">Titre du livre *</Label>
                          <Input
                            id="bookTitle"
                            name="bookTitle"
                            type="text"
                            value={formData.bookTitle}
                            onChange={handleInputChange}
                            placeholder="Titre de l'ouvrage"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="bookAuthor">Auteur</Label>
                          <Input
                            id="bookAuthor"
                            name="bookAuthor"
                            type="text"
                            value={formData.bookAuthor}
                            onChange={handleInputChange}
                            placeholder="Nom de l'auteur"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="bookISBN">ISBN (si connu)</Label>
                          <Input
                            id="bookISBN"
                            name="bookISBN"
                            type="text"
                            value={formData.bookISBN}
                            onChange={handleInputChange}
                            placeholder="978-2-XXX-XXXXX-X"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Reservation Details */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Détails de la réservation</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="reservationType">Type de réservation *</Label>
                          <Select value={formData.reservationType} onValueChange={(value) => handleSelectChange('reservationType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Choisissez le type" />
                            </SelectTrigger>
                            <SelectContent>
                              {reservationTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="preferredDate">Date souhaitée (optionnel)</Label>
                          <Input
                            id="preferredDate"
                            name="preferredDate"
                            type="date"
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="comments">Commentaires</Label>
                          <Textarea
                            id="comments"
                            name="comments"
                            value={formData.comments}
                            onChange={handleInputChange}
                            placeholder="Informations complémentaires..."
                            rows={3}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                      <Button
                        type="submit"
                        disabled={!isFormValid || isSubmitting}
                        className="flex-1"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Confirmer la réservation
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={generatePDF}
                        className="flex-1"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Télécharger en PDF
                      </Button>
                    </div>

                    <p className="text-xs text-gray-500">
                      * Champs obligatoires. Vous recevrez une confirmation par email une fois votre réservation traitée.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Available Books */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Livres disponibles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {availableBooks.map((book) => (
                      <div key={book.id} className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer" onClick={() => handleBookSelect(book)}>
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-gray-900 text-sm leading-tight">{book.title}</h4>
                          <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                            Disponible
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600 mb-1">{book.author}</p>
                        <p className="text-xs text-gray-500">{book.category}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reservation Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Informations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Réservation gratuite</p>
                        <p className="text-gray-600 text-xs">Aucun frais pour réserver un livre</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Calendar className="w-4 h-4 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Durée de réservation</p>
                        <p className="text-gray-600 text-xs">7 jours maximum</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Mail className="w-4 h-4 text-purple-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Notification</p>
                        <p className="text-gray-600 text-xs">Email de confirmation envoyé</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Besoin d'aide ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span>01 23 45 67 85</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span>mediatheque@ville.fr</span>
                    </div>
                    <p className="text-gray-600 text-xs">
                      Notre équipe est disponible pour vous aider du mardi au samedi.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Warning */}
              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-orange-900 mb-1">Important</p>
                      <p className="text-orange-800 text-xs">
                        Les réservations sont traitées dans l'ordre d'arrivée. 
                        Vous serez notifié dès que votre livre est disponible.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReservationPage;