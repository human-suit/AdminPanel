PGDMP  	                    |            date_startaps    16.3    16.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24578    date_startaps    DATABASE     �   CREATE DATABASE date_startaps WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE date_startaps;
                postgres    false            �          0    24589    startaps 
   TABLE DATA           t   COPY public.startaps (id, namestart, opisanie, trebovaniya, namekomp, statusdata, crokvip, price, open) FROM stdin;
    public          postgres    false    216          �           0    0    startaps_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.startaps_id_seq', 1, false);
          public          postgres    false    215            �      x������ � �     