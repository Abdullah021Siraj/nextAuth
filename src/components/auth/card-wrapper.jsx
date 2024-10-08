'use client'

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Header } from '../auth/header'
import { BackButton } from "./back-button"
import { Social } from "./social"

export const CardWrapper = (
    {
        children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
    }
) =>{
    return (
        <Card className="w-[400px] shadow-md">
          <CardHeader>
            <Header label={headerLabel} />
          </CardHeader>
          <CardContent>{children}</CardContent>
          {showSocial && (
            <CardFooter>
              <Social />
            </CardFooter>
          )}
          <CardFooter>
            <BackButton label={backButtonLabel} href={backButtonHref} />
          </CardFooter>
        </Card>
      );
}