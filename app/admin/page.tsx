'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Users, Mail, CheckCircle, XCircle, Clock } from 'lucide-react';
import { supabase, Reservation, Contact } from '@/lib/supabase';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  const ADMIN_PASSWORD = 'admin123';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      loadData();
    } else {
      setError('Mot de passe incorrect');
    }
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const { data: resData } = await supabase
        .from('reservations')
        .select('*')
        .order('created_at', { ascending: false });

      const { data: contactData } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      setReservations(resData || []);
      setContacts(contactData || []);
    } catch (error) {
      console.error('Erreur lors du chargement des données:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateReservationStatus = async (id: string, newStatus: 'confirmee' | 'annulee') => {
    try {
      const { error } = await supabase
        .from('reservations')
        .update({ statut: newStatus })
        .eq('id', id);

      if (error) throw error;
      loadData();
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
    }
  };

  const markContactAsRead = async (id: string) => {
    try {
      const { error } = await supabase.from('contacts').update({ lu: true }).eq('id', id);

      if (error) throw error;
      loadData();
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-[#FFF8F0] flex items-center justify-center px-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <CardTitle className="font-playfair text-3xl">Administration</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Entrez le mot de passe"
                  className="mt-2"
                />
              </div>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
                  {error}
                </div>
              )}
              <Button type="submit" className="w-full bg-[#C8102E] hover:bg-[#A00D24]">
                Se connecter
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getStatusBadge = (statut: string) => {
    switch (statut) {
      case 'confirmee':
        return (
          <Badge className="bg-[#009246] text-white">
            <CheckCircle className="h-3 w-3 mr-1" />
            Confirmée
          </Badge>
        );
      case 'annulee':
        return (
          <Badge variant="destructive">
            <XCircle className="h-3 w-3 mr-1" />
            Annulée
          </Badge>
        );
      default:
        return (
          <Badge variant="secondary">
            <Clock className="h-3 w-3 mr-1" />
            En attente
          </Badge>
        );
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-playfair text-4xl font-bold">Dashboard Admin</h1>
          <Button onClick={() => setIsAuthenticated(false)} variant="outline">
            Se déconnecter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#C8102E] p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Réservations</p>
                  <p className="text-3xl font-bold">{reservations.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#009246] p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Confirmées</p>
                  <p className="text-3xl font-bold">
                    {reservations.filter((r) => r.statut === 'confirmee').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-600 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Messages</p>
                  <p className="text-3xl font-bold">{contacts.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="reservations" className="space-y-6">
          <TabsList className="grid w-full md:w-auto grid-cols-2">
            <TabsTrigger value="reservations">
              <Calendar className="h-4 w-4 mr-2" />
              Réservations
            </TabsTrigger>
            <TabsTrigger value="contacts">
              <Mail className="h-4 w-4 mr-2" />
              Contacts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="reservations">
            <Card>
              <CardHeader>
                <CardTitle>Liste des réservations</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8 text-gray-500">Chargement...</div>
                ) : reservations.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    Aucune réservation pour le moment
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date création</TableHead>
                          <TableHead>Nom</TableHead>
                          <TableHead>Contact</TableHead>
                          <TableHead>Date RDV</TableHead>
                          <TableHead>Heure</TableHead>
                          <TableHead>Personnes</TableHead>
                          <TableHead>Statut</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {reservations.map((reservation) => (
                          <TableRow key={reservation.id}>
                            <TableCell className="text-sm">
                              {formatDateTime(reservation.created_at)}
                            </TableCell>
                            <TableCell className="font-medium">{reservation.nom}</TableCell>
                            <TableCell className="text-sm">
                              <div>{reservation.email}</div>
                              <div className="text-gray-500">{reservation.telephone}</div>
                            </TableCell>
                            <TableCell>{formatDate(reservation.date_rdv)}</TableCell>
                            <TableCell className="font-medium">{reservation.heure_rdv}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {reservation.nb_personnes}
                              </div>
                            </TableCell>
                            <TableCell>{getStatusBadge(reservation.statut)}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                {reservation.statut !== 'confirmee' && (
                                  <Button
                                    size="sm"
                                    onClick={() =>
                                      updateReservationStatus(reservation.id, 'confirmee')
                                    }
                                    className="bg-[#009246] hover:bg-[#007A38]"
                                  >
                                    Confirmer
                                  </Button>
                                )}
                                {reservation.statut !== 'annulee' && (
                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    onClick={() =>
                                      updateReservationStatus(reservation.id, 'annulee')
                                    }
                                  >
                                    Annuler
                                  </Button>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Messages de contact</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8 text-gray-500">Chargement...</div>
                ) : contacts.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    Aucun message pour le moment
                  </div>
                ) : (
                  <div className="space-y-4">
                    {contacts.map((contact) => (
                      <Card
                        key={contact.id}
                        className={contact.lu ? 'bg-gray-50' : 'border-[#C8102E] border-2'}
                      >
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-semibold text-lg">{contact.nom}</h3>
                              <p className="text-sm text-gray-600">{contact.email}</p>
                              <p className="text-sm text-gray-600">{contact.telephone}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500">
                                {formatDateTime(contact.created_at)}
                              </p>
                              {!contact.lu && (
                                <Badge className="mt-2 bg-[#C8102E]">Nouveau</Badge>
                              )}
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded border">
                            <p className="text-gray-700 whitespace-pre-wrap">{contact.message}</p>
                          </div>
                          {!contact.lu && (
                            <div className="mt-4">
                              <Button
                                size="sm"
                                onClick={() => markContactAsRead(contact.id)}
                                className="bg-[#009246] hover:bg-[#007A38]"
                              >
                                Marquer comme lu
                              </Button>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
