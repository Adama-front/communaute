'use client';

import { useState } from 'react';
import { Share2, Copy, Facebook, Twitter, Mail, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from 'sonner';

interface ShareButtonProps {
  title: string;
  url?: string;
  description?: string;
}

export function ShareButton({ title, url, description }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const shareUrl = url || window.location.href;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast.success('Lien copié !');
      setIsOpen(false);
    } catch (err) {
      toast.error('Erreur lors de la copie');
    }
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
    setIsOpen(false);
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
    setIsOpen(false);
  };

  const shareByEmail = () => {
    const emailUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description || '')}%0A%0A${encodeURIComponent(shareUrl)}`;
    window.location.href = emailUrl;
    setIsOpen(false);
  };

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url: shareUrl,
        });
        setIsOpen(false);
      } catch (err) {
        // L'utilisateur a annulé le partage
      }
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <Share2 className="w-4 h-4 mr-2" />
          Partager
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64" align="end">
        <div className="space-y-2">
          <h4 className="font-semibold text-sm mb-3">Partager cet article</h4>
          
          {navigator.share && (
            <Button
              variant="ghost"
              size="sm"
              onClick={nativeShare}
              className="w-full justify-start"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Partager...
            </Button>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="w-full justify-start"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copier le lien
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={shareOnFacebook}
            className="w-full justify-start"
          >
            <Facebook className="w-4 h-4 mr-2" />
            Facebook
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={shareOnTwitter}
            className="w-full justify-start"
          >
            <Twitter className="w-4 h-4 mr-2" />
            Twitter
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={shareByEmail}
            className="w-full justify-start"
          >
            <Mail className="w-4 h-4 mr-2" />
            Email
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}